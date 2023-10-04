import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../service/AuthService";
import axios from "axios";

type UserData = {
  email: string;
  password: string;
};

type Username = {
  username: string;
};

type State = {
  isAuth: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
  accessToken: string | null;
  user: IUser;
};

const initialState: State = {
  isAuth: false,
  status: "idle",
  error: undefined,
  accessToken: null,
  user: {} as IUser,
};

export const login = createAsyncThunk("auth/login", async (obj: UserData) => {
  const { email, password } = obj;
  const response = await AuthService.login(email, password);

  return response.data;
});

export const register = createAsyncThunk(
  "auth/register",
  async (obj: UserData & Username) => {
    const { email, password, username } = obj;
    const response = await AuthService.register(email, password, username);
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const response = await axios.post<AuthResponse>(
    process.env.NEXT_PUBLIC_URL + "/api/auth/refresh",
    {},
    { withCredentials: true }
  );

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //login
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuth = true;
        state.accessToken = action.payload.accessToken;

        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.isAuth = false;
        state.error = action.error.message;
      })
      //register
      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuth = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.isAuth = false;
        state.error = action.error.message;
      })
      //logout
      .addCase(logout.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuth = false;
        state.accessToken = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.isAuth = false;
        state.error = action.error.message;
      })
      //checkAuth
      .addCase(checkAuth.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuth = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.status = "failed";
        state.isAuth = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
