import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import sessionReducer from "./features/sessionSlice";
import menuReducer from "./features/menuSlice";
import modalReducer from "./features/modalSlice";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
    sessionReducer,
    menuReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
