import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
