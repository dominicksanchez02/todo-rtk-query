import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AppSlice } from './app-slice';
import counterReducer from '../features/counter/slice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [ AppSlice.reducerPath ]: AppSlice.reducer,
    counter: counterReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(AppSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
