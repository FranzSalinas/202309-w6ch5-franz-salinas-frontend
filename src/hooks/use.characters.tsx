import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ApiRepo } from '../services/api.repo';
import { useCallback, useMemo } from 'react';
import { ac } from '../slice/users.slice';

import {
  loadFootballersThunk,
  logginUserThunk,
  logginWithTokenThunk,
} from '../slice/thunks';
import { Footballers } from '../model/footballers';
import { setCurrentFootballer } from '../slice/slice';
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

export function useFootballers() {
  const { footballers } = useSelector(
    (state: RootState) => state.footballersState
  );
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ApiRepo(), []);

  const loadFootballers = useCallback(async () => {
    try {
      dispatch(loadFootballersThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [dispatch, repo]);

  const handleDetailsPage = async (footballer: Footballers) => {
    dispatch(setCurrentFootballer(footballer));
  };

  /*  const update = async (
    id: Footballers['id'],
    updatedFootballer: Partial<Footballers>
  ) => {
    try {
      dispatch(updateFootballersThunk({ repo, id, updatedFootballer }));
    } catch (error) {
      console.log((error as Error).message);
    }
  }; */

  return {
    loadFootballers,
    footballers,
    handleDetailsPage,
    /*  update, */
  };
}
