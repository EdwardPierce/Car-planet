interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    id: string;
    username: string;
  };
}
