import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadFootballersThunk, updateFootballersThunk } from './thunks';
import { Footballers } from '../model/footballers';
/* import { User } from '../model/user'; */

type FootballersState = {
  footballers: Footballers[];
  footballerInitialState: 'idle' | 'loading' | 'error';
  currentFootballer: Footballers | null;
};

/* type UserState = {
  user: User[];
  userInitialState: boolean;
  currentUser: User | null;
}; */

const initialState: FootballersState = {
  footballers: [],
  footballerInitialState: 'idle',
  currentFootballer: null,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* const initialUserState: UserState = {
  user: [],
  userInitialState: false,
  currentUser: null,
};
 */
const footballersSlice = createSlice({
  name: 'footballer',
  initialState,
  reducers: {
    setCurrentFootballer: (
      state: FootballersState,
      { payload }: PayloadAction<Footballers | null>
    ) => {
      state.currentFootballer = payload;
      return state;
    },
  },

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
export const { setCurrentFootballer } = footballersSlice.actions;
