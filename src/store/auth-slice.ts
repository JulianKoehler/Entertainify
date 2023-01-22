import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
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
