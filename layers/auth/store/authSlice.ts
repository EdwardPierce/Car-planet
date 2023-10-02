import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../service/AuthService";

interface UserData {
  email: string;
  password: string;
}

const initialState = { isAuth: false };

export const login = createAsyncThunk("auth/login", async (obj: UserData) => {
  const { email, password } = obj;
  const response = await AuthService.login(email, password);
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
