import * as toolkitRaw from '@reduxjs/toolkit';

const {createSlice} = toolkitRaw.default ?? toolkitRaw;

const initialState = {
  isHomeActive: true,
  drawerSwipeEnabled: true,
};

const appSlice = createSlice({
  name: 'appFunc',
  initialState,
  reducers: {
    setHomeActive: (state, action) => {
      state.isHomeActive = true;
    },
    setHomeInactive: (state, action) => {
      state.isHomeActive = false;
    },
    setDrawerSwipeEnabled: (state, action) => {
      state.drawerSwipeEnabled = true;
    },
    setDrawerSwipeDisabled: (state, action) => {
      state.drawerSwipeEnabled = false;
    },
  },
});

export const {
  setHomeActive,
  setHomeInactive,
  setDrawerSwipeEnabled,
  setDrawerSwipeDisabled,
} = appSlice.actions;

export const selectIsHomeActive = state => state.appFunc.isHomeActive;
export const selectDrawerSwipeEnabled = state =>
  state.appFunc.drawerSwipeEnabled;

export default appSlice.reducer;
