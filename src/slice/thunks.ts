import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo';
import { Footballers } from '../model/footballers';
import { LoginResponse } from '../model/login.response';
import { LoginUser } from '../model/user';

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
  }
>('login', async ({ loginUser, repo }) => {
  return await repo.loginUser(loginUser);
});

/* export const logginWithTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: ApiRepo;
  }
>('loginWithToken', async ({ loginUser, repo }) => {
  return await repo.loginUser(loginUser);
});
 */
