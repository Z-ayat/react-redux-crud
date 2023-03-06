import { configureStore } from '@reduxjs/toolkit';
import posts from './postSlice';
import auth from './authSlice';
export const store = configureStore({
  reducer: { posts, auth },
});
