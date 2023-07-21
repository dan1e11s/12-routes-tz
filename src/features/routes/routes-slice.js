import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: [],
};

const routesSlice = createSlice({
  name: '@@routes',
  initialState,
  reducers: {
    getPoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const routeReducer = routesSlice.reducer;
export const { getPoints } = routesSlice.actions;
