import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepo } from '../services/api.repo';

import { ac } from '../slice/users.slice';

import { logginUserThunk, logginWithTokenThunk } from '../slice/thunks';

import { LoginUser } from '../model/user';
import { Storage } from '../services/storage';

export function useUsers() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const dispacht = useDispatch<AppDispatch>();
  const repo = new ApiRepo();
  const userStore = new Storage<{ token: string }>('users');

  const makeLogOut = () => {
    dispacht(ac.logout());
    userStore.remove();
  };

  const register = (newUser: FormData) => {
    repo.registerUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispacht(logginUserThunk({ loginUser, repo, userStore: userStore }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loginWithToken = () => {
    const userStoreData = userStore.get();
    if (userStoreData) {
      const token = userStoreData.token;
      dispacht(logginWithTokenThunk({ token, repo, userStore: userStore }));
    }
  };

  return {
    makeLogOut,
    login,
    register,
    loginWithToken,
  };
}
