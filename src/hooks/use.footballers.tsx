import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useCallback, useMemo } from 'react';
import { ApiRepo } from '../services/api.repo';
import { loadFootballersThunk } from '../slice/thunks';
import { Footballers } from '../model/footballers';
import { setCurrentFootballer } from '../slice/slice';

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
