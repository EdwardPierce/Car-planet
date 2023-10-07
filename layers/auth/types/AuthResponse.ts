type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: IUser;
};

type IUser = {
  email: string;
  id: string;
  username: string;
};

type UserData = {
  email: string;
  password: string;
};

type Username = {
  username: string;
};
