import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/contactsReducer";
import auth from "./reducers/authReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const defaultMidleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: persistReducer(persistConfig, auth),
  },
  middleware: [...defaultMidleware],
});

export const persistor = persistStore(store);

export default store;
