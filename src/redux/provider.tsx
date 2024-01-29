"use client";

import GlobalModal from "../utils/GlobalModal";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GlobalModal />
      {children}
    </Provider>
  );
}
