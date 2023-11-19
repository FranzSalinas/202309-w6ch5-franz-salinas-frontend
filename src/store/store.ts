import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import footballersReducer from '../slice/slice';

export const store = configureStore({
  reducer: {
    footballersState: footballersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
