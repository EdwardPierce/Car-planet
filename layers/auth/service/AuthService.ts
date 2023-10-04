import $api from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/api/auth/login", { email, password });
  }

  static async register(
    email: string,
    password: string,
    username: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/api/auth/register", {
      email,
      password,
      username,
    });
  }

  static async logout(): Promise<void> {
    return $api.delete("/api/auth/logout");
  }
}
