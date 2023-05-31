import * as toolkitRaw from '@reduxjs/toolkit';

const {createSlice} = toolkitRaw.default ?? toolkitRaw;

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  email: null,
  username: null,
  userId: null,
  phone: null,
  token: null,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoading = false;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
      state.userId = action.payload.userId;
      state.phone = action.payload.phone;
      state.token = action.payload.token;
    },
    setSignOut: state => {
      state.email = null;
      (state.isLoading = false), (state.userName = null);
      state.isLoggedIn = false;
      state.userId = null;
      state.phone = null;
      state.token = null;
    },
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;

export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;
export const selectIsLoading = state => state.userAuth.isLoading;
export const selectEmail = state => state.userAuth.email;
export const selectUserName = state => state.userAuth.userName;
export const selectUserId = state => state.userAuth.userId;
export const selectPhone = state => state.userAuth.phone;
export const selectToken = state => state.userAuth.token;

export default authSlice.reducer;
