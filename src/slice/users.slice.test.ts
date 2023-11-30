import usersReducer, { UserState } from './users.slice';

describe('Given usersReducer', () => {
  //Actions users/logout, users/login/fullilled, users/login/pending
  describe(' When users/logout action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'users/logout' }; // Este nombre es porque es sincrona, ver otro ejmplo abajo
      const state: UserState = {} as UserState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe(null);
      expect(result.token).toBe('');
    });
  });

  describe(' When users/login/pending action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'login/pending' }; //  Este nombre es así porque es asincrona (nombre del thunk más el estado que toque.)
      const state: UserState = {} as UserState;
      const result = usersReducer(state, action);
      expect(result.loggingState).toBe('logged');
    });
  });

  test('Then the new state will be returned ', () => {
    const action = { type: 'login/rejected' }; //  Este nombre es así porque es asincrona (nombre del thunk más el estado que toque.)
    const state: UserState = {} as UserState;
    const result = usersReducer(state, action);
    expect(result.loggingState).toBe('error');
  });

  test('Then the new state will be returned ', () => {
    const action = {
      type: 'login/fulfilled', //  Este nombre es así porque es asincrona (nombre del thunk más el estado que toque.)
      payload: { user: 'test user', token: 'token' },
    };
    const state: UserState = {} as UserState;
    const result = usersReducer(state, action);
    expect(result.loggedUser).toBe('test user');
    expect(result.token).toBe('token');
  });

  test('Then the new state will be returned ', () => {
    const action = {
      type: 'loginWithToken/fulfilled', //  Este nombre es así porque es asincrona (nombre del thunk más el estado que toque.)
      payload: { user: 'test user', token: 'token' },
    };
    const state: UserState = {} as UserState;
    const result = usersReducer(state, action);
    expect(result.loggedUser).toBe('test user');
    expect(result.token).toBe('token');
  });
});
