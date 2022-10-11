import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { logger, thunk } from "../middleware";
import { rootReducer } from "../reducers";

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
