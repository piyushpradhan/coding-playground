import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createStore, Store } from "redux";
import { thunk } from "../middleware";
import logger from "redux-logger";
import { rootReducer } from "../reducers";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootPersistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store: Store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
