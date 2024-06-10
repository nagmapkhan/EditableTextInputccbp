
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await axios.post('/api/auth/signup', userData);
  return response.data;
});

export const signin = createAsyncThunk('auth/signin', async (userData) => {
  const response = await axios.post('/api/auth/signin', userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  }
});

export default authSlice.reducer;
