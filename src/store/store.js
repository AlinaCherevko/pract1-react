import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoReducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const todoConfig = {
  key: 'todo',
  storage,
  whitelist: ['todo'],
};
export const store = configureStore({
  reducer: {
    todo: persistReducer(todoConfig, todoReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
