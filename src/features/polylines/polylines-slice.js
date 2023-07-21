import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  polyline: '',
};

const polylinesSlice = createSlice({
  name: '@@polylines',
  initialState,
  reducers: {
    getSuccessPolyline: (state, action) => {
      state.polyline = action.payload;
    },
  },
});

export const GET_POLYLINE = '@@polylines/getPolyline';
export const getPolyline = (points) => {
  return {
    type: GET_POLYLINE,
    payload: points,
  };
};

export const { getSuccessPolyline } = polylinesSlice.actions;
export const polylineReducer = polylinesSlice.reducer;
