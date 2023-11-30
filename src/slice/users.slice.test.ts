import usersReducer, { UserState } from './users.slice';

describe('Given usersReducer', () => {
  //Actions users/logout, users/login/fullilled, users/login/pending
  describe(' When users/logout action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'users/logout' };
      const state: UserState = {} as UserState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe(null);
      expect(result.token).toBe('');
    });
  });

  describe(' When users/login/pending action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'logginUserThunk.pending.type' };
      const state: UserState = {} as UserState;
      const result = usersReducer(state, action);
      expect(result.loggingState).toBe('logged');
    });
  });
});
