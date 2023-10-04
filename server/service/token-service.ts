import UserDto from "../dtos/user-dto";
import TokenModel from "../models/token";
import { IUserDto } from "../types/userFromDto";
import jwt from "jsonwebtoken";

class TokenService {
  generateTokens(payload: IUserDto): {
    accessToken: string;
    refreshToken: string;
  } {
    const accessToken: string = jwt.sign(
      payload,
      //@ts-ignore
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken: string = jwt.sign(
      payload,
      //@ts-ignore
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "15d",
      }
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: string, refreshToken: string): Promise<void> {
    const haveTokenInDB = await TokenModel.findOne({ user: userId });
    if (haveTokenInDB) {
      haveTokenInDB.refreshToken = refreshToken;
      await haveTokenInDB.save();
      return;
    }

    if (!userId || !refreshToken) {
      throw new Error(
        `userId or refreshToken is null:${userId} & ${refreshToken} `
      );
    }

    await TokenModel.create({ user: userId, refreshToken });
  }

  async removeToken(refreshToken: string | undefined) {
    const tokenData = await TokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  validateRefreshToken(token: string): IUserDto | null {
    try {
      const userData = jwt.verify(
        token,
        //@ts-ignore
        process.env.JWT_REFRESH_SECRET
      ) as unknown;

      return userData as IUserDto;
    } catch (error) {
      return null;
    }
  }

  validateAccessToken(token: string): IUserDto | null {
    try {
      const userData = jwt.verify(
        token,
        //@ts-ignore
        process.env.JWT_ACCESS_SECRET
      ) as unknown;

      return userData as IUserDto;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken: string) {
    const tokenData = await TokenModel.findOne({ refreshToken });

    console.log("tokenData ", tokenData);
    console.count("tokenData");

    return tokenData;
  }
}

const tokenService = new TokenService();

export default tokenService;
