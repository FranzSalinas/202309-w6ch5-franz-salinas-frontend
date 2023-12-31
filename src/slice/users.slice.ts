import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user';
import { logginUserThunk } from './thunks';
import { LoginResponse } from '../model/login.response';

type LoginState = 'idle' | 'logged' | 'error';

type UserState = {
  token: string;
  loggingState: LoginState;
  loggedUser: User | null;
};

const initialState: UserState = {
  loggedUser: null,
  loggingState: 'idle',
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state: UserState) => {
      state.loggedUser = null;
      state.token = '';
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      logginUserThunk.fulfilled,
      (state: UserState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    );
  },
});

export default usersSlice.reducer;

export const ac = usersSlice.actions;
