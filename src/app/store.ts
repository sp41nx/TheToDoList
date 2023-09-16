import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasksSlice from "../features/TasksSlice";

export const store = configureStore({
  reducer: {
    tasksSlice
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
