import UserDto from "../dtos/user-dto";
import UserModel from "../models/user";
import * as bcrypt from "bcrypt";
import { IUserDto } from "../types/userFromDto";
import tokenService from "./token-service";

class UserService {
  async register(email: string, password: string, username: string) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw new Error(`The user with email ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const user = await UserModel.create({
      email,
      password: hashPassword,
      username,
    });

    const data = this.getUserAndTokens(user);

    return data;
  }

  async login(email: string, password: string) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error(
        "The user with this email was not found. Please pass registration"
      );
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
      throw new Error("Invalid password");
    }

    const data = this.getUserAndTokens(user);

    return data;
  }

  async logout(refreshToken: string | undefined) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken: string | undefined) {
    if (!refreshToken) {
      throw new Error("Unauthorized");
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData) {
      throw new Error("Token invalid");
    }

    if (!tokenFromDb) {
      throw new Error("Token not found in DB");
    }

    const user = await UserModel.findById(userData.id);

    const data = this.getUserAndTokens(user);

    return data;
  }

  async getUserAndTokens(user: any): Promise<{
    user: UserDto;
    accessToken: string;
    refreshToken: string;
  }> {
    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}
const userService = new UserService();

export default userService;
