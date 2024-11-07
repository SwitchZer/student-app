import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { productApi } from "./services/productApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
