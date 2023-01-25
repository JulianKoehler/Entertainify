import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  tokenDuration: number | null;
  tokenExpired: boolean | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  tokenDuration: null,
  tokenExpired: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
