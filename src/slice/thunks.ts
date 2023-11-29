import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo';
import { Footballers } from '../model/footballers';
import { LoginResponse } from '../model/login.response';
import { LoginUser } from '../model/user';
import { Storage } from '../services/storage';

export const loadFootballersThunk = createAsyncThunk<Footballers[], ApiRepo>(
  'footballer/load',
  async (repo) => {
    const characters = await repo.getFootballers();
    return characters;
  }
);

export const updateFootballersThunk = createAsyncThunk<
  Footballers,
  {
    repo: ApiRepo;
    id: Footballers['id'];
    updatedCharacter: Partial<Footballers>;
  }
>('character/update', async ({ repo, id, updatedCharacter }) => {
  const finalCharacter = await repo.setFootballers(id, updatedCharacter);
  return finalCharacter;
});

export const logginUserThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: ApiRepo;
    userStorage: Storage<{ token: string }>;
  }
>('login', async ({ loginUser, repo, userStorage }) => {
  const loginResponse = await repo.loginUser(loginUser);
  userStorage.set({ token: loginResponse.token });

  return loginResponse;
});

export const logginWithTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: ApiRepo;
  }
>('loginWithToken', async ({ token, repo }) => {
  return await repo.loginUserWithToken(token);
});
