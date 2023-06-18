import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './redux/reducers/UserReduser'

const store = configureStore({
  reducer: {
      // [pokemonApi.reducerPath]: pokemonApi.reducer,
      user:UserReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store