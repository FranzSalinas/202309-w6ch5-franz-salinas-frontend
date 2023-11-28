import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadFootballersThunk, logginUserThunk, updateFootballersThunk } from './thunks';
import { Footballers } from '../model/footballers';
import { User } from '../model/user';
import { LoginResponse } from '../model/login.response';

type FootballersState = {
  footballers: Footballers[];
  footballerInitialState: 'idle' | 'loading' | 'error';
  currentFootballer: Footballers | null;
};

type UserState = {
  token: string;
  loggingState: 'idle' | 'logged' | 'error';
  loggedUser: User | null;
};

const initialState: FootballersState = {
  footballers: [],
  footballerInitialState: 'idle',
  currentFootballer: null,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialUserState: UserState = {
  loggedUser: null,
  loggingState: 'idle',
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialUserState,
  reducers: {

    logout: (state: UserState) => {
      state.loggedUser = null;
      state.token = '';
      return state;
    },
  },

  extraReducers:(builder) => { 


    builder.addCase(
      logginUserThunk.fulfilled,
      (state: UserState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    ),
  

      builder.addCase(
      logginUserThunk.pending,
      (state: UserState)
      }
    )
  }

};

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
usersSlice.reducer;
export const { setCurrentFootballer } = footballersSlice.actions;
export const {logout} = usersSlice.actions;
