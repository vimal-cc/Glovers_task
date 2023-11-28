import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers, ThunkDispatch} from '@reduxjs/toolkit';
import auth from '../redux/slices/AuthSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {AppState} from 'react-native';

import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {HTTPClient} from '../utils/HttpsClient';

const reducers = combineReducers({
  [HTTPClient.reducerPath]: HTTPClient.reducer,
  auth,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: false,
    }).concat(HTTPClient.middleware);
    return middlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export {store, persistor};
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
