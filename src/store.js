import { configureStore } from '@reduxjs/toolkit';
import {
  GET_POLYLINE,
  polylineReducer,
} from './features/polylines/polylines-slice';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { getPolylineSaga } from './sagas/polyline-saga';
import { routeReducer } from './features/routes/routes-slice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_POLYLINE, getPolylineSaga);
}

export const store = configureStore({
  reducer: {
    polylines: polylineReducer,
    routes: routeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(sagas);
