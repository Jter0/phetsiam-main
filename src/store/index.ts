import {
  createStore,
  applyMiddleware,
  // combineReducers
} from "redux";
import { withExtraArgument, thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import reducer from "./reducer";
import storage from "redux-persist/lib/storage";

const persistConfig: any = {
  key: "root",
  timeout: null,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(withExtraArgument(thunk))
);

const persister = persistStore(store);

export { store, persister };

export default store;
