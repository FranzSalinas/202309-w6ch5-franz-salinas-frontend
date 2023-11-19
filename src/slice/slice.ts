import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadFootballersThunk, updateFootballersThunk } from './thunks';
import { Footballers } from '../model/footballers';

type FootballersState = {
  footballers: Footballers[];
  footballerInitialState: 'idle' | 'loading' | 'error';
};

const initialState: FootballersState = {
  footballers: [],
  footballerInitialState: 'idle',
};

const footballersSlice = createSlice({
  name: 'footballer',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      loadFootballersThunk.fulfilled,
      (state: FootballersState, { payload }: PayloadAction<Footballers[]>) => {
        state.footballers = payload;
        state.footballerInitialState = 'idle';
        return state;
      }
    );

    builder.addCase(loadFootballersThunk.pending, (state: FootballersState) => {
      state.footballerInitialState = 'loading';
      return state;
    });

    builder.addCase(
      loadFootballersThunk.rejected,
      (state: FootballersState) => {
        state.footballerInitialState = 'error';
        return state;
      }
    );

    builder.addCase(
      updateFootballersThunk.fulfilled,
      (state: FootballersState, { payload }: PayloadAction<Footballers>) => {
        state.footballers[
          state.footballers.findIndex((item) => item.id === payload.id)
        ] = payload;
        return state;
      }
    );

    builder.addCase(
      updateFootballersThunk.pending,
      (state: FootballersState) => {
        state.footballerInitialState = 'loading';
        return state;
      }
    );

    builder.addCase(
      updateFootballersThunk.rejected,
      (state: FootballersState) => {
        state.footballerInitialState = 'error';
      }
    );
  },
});

export default footballersSlice.reducer;
