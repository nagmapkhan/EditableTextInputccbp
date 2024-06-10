
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk('starWars/fetchCharacters', async (page) => {
  const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
  return response.data.results;
});

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState: { characters: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default starWarsSlice.reducer;
