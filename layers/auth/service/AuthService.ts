import $api from "../http";
import axios, { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    const response = await $api.post<AuthResponse>("/api/auth/login", {
      email,
      password,
    });
    return response;
  }

  static async register(
    email: string,
    password: string,
    username: string
  ): Promise<AxiosResponse<AuthResponse>> {
    const response = await $api.post<AuthResponse>("/api/auth/register", {
      email,
      password,
      username,
    });
    return response;
  }

  static async logout(): Promise<void> {
    const response = await $api.delete("/api/auth/logout");

    return;
  }

  static async checkAuth(): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(
      process.env.NEXT_PUBLIC_URL + "/api/auth/refresh",
      {},
      { withCredentials: true }
    );

    return response.data;
  }
}
