import { AxiosResponse } from "axios";

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: IUser;
};

export type IUser = {
  email: string;
  id: string;
  username: string;
};

export type UserData = {
  email: string;
  password: string;
};

export type Username = {
  username: string;
};


