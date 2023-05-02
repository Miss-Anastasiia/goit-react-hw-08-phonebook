import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authOperations from './authification';




export const authSlice = createSlice({
  name: 'authification',
  initialState: {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
},
  extraReducers: builder =>
    builder
    .addCase(authOperations.addNewUser.fulfilled,(state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(authOperations.loginUser.fulfilled,(state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(authOperations.logoutUser.fulfilled, state=> {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(authOperations.getUserInformation.pending, state =>{
      state.isFetchingUser = true;
    })
    .addCase(authOperations.getUserInformation.fulfilled,(state, action)=> {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    })
    .addCase(authOperations.getUserInformation.rejected, state => {
      state.isFetchingUser = false;
    }),
  });

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedToken = persistReducer(persistConfig, authSlice.reducer);