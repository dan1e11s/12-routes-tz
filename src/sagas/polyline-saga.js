import { put } from 'redux-saga/effects';
import { getPolylineApi } from '../api/polyline';
import { getSuccessPolyline } from '../features/polylines/polylines-slice';

export function* getPolylineSaga(points) {
  const payload = yield getPolylineApi(points);

  yield put(getSuccessPolyline(payload));
}
