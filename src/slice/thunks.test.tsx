import { LoginUser } from '../model/user';
import { ApiRepo } from '../services/api.repo';
import { Storage } from '../services/storage';
import { store } from '../store/store';
import { logginUserThunk, logginWithTokenThunk } from './thunks';

describe('Given...', () => {
  describe('When...', () => {
    const sharedData = {
      repo: {
        loginUser: jest.fn().mockReturnValue({
          token: '',
        }),
        loginWithToken: jest.fn().mockReturnValue({
          token: '',
        }),
      } as unknown as ApiRepo,
      userStore: {
        set: jest.fn(),
      } as unknown as Storage<{
        token: string;
      }>,
    };

    test('Then it should ...', async () => {
      const data = { ...sharedData, loginUser: {} as LoginUser };
      await store.dispatch(logginUserThunk(data));
      expect(data.repo.loginUser).toHaveBeenCalled();
      expect(data.userStore.set).toHaveBeenCalled();
      data.repo.loginUser;
    });
    test('Then it should ...', async () => {
      const data = { ...sharedData, token: '' };
      await store.dispatch(logginWithTokenThunk(data));
      expect(data.repo.loginUser).toHaveBeenCalled();
      expect(data.userStore.set).toHaveBeenCalled();
      data.repo.loginUser;
    });
  });
});
