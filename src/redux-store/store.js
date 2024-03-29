import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appSlice from './slices/appSlice';

export const store = configureStore({
  reducer: {
    userAuth: authSlice,
    appFunc: appSlice,
  },
});
