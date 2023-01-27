import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  tokenDuration: number | null;
  tokenExpired: boolean | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  tokenDuration: null,
  tokenExpired: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
export const { login, logout, setErrorMessage } = authSlice.actions;

export default authSlice.reducer;
