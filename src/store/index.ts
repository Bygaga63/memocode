import { configureStore, combineReducers, Action, ThunkAction } from '@reduxjs/toolkit';
import * as reducers from './modules'

const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;