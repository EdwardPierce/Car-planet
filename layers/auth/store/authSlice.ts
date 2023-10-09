import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types/AuthResponse";

type State = {
  isAuth: boolean;
  user: IUser | null;
};

const initialState: State = {
  isAuth: false,
  user: {} as IUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
