import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ApiRepo } from '../services/api.repo';
import { useCallback, useMemo } from 'react';

import {
  loadFootballersThunk,
  logginUserThunk,
  /* updateFootballersThunk, */
} from '../slice/thunks';
import { Footballers } from '../model/footballers';
import { logout, setCurrentFootballer } from '../slice/slice';
import { LoginUser, User } from '../model/user';
/* import { Footballers } from '../model/footballers'; */

export function useUsers() {
  const { token } = useSelector((state: RootState) => {
    state.userState;
  });
  const dispacht = useDispatch<AppDispatch>();
  const repo = new ApiRepo();
  const makeLogOut = () => {
    dispacht(logout());
  };

  const register = (newUser: Partial<User>) => {
    repo.registerUser(newUser);
  };

  const loginWithToken = (token: string) => {
    dispacht(loginTokenThunk({ token, repo }));
  };

  const login = (loginUser: LoginUser) => {
    dispacht(logginUserThunk({ loginUser, repo }));
  };

  return {
    makeLogOut,
    login,
    register,
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
