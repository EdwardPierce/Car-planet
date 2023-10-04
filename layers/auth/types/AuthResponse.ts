interface AuthResponse {
  status: string;
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

interface IUser {
  email: string;
  id: string;
  username: string;
}
