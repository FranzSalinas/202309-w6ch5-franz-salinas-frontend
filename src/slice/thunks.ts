import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo';
import { Footballers } from '../model/footballers';

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
