import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeaders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (FormData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", FormData);
      setAuthHeaders(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiRegister = createAsyncThunk(
  "auth/register",
  async (FormData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", FormData);
      setAuthHeaders(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeaders(token);
      const { data } = await instance.get("users/current");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (token) {
        return true;
      }
      return false;
    },
  }
);

export const apiLogout = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");

      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
