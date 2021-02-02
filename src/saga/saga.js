import { takeLatest, put, call } from "redux-saga/effects";

import Types from "../redux/types";
import { fetchData } from "./api";

function* fetchSongs(action) {
  try {
    const data = yield call(fetchData, action.payload);
    yield put({ type: Types.SONGS, payload: data });
  } catch (e) {
    yield put({ type: Types.ERRORS, payload: e });
  }
}

export default function* watchApiRequests() {
  yield takeLatest(Types.REQUEST_API, fetchSongs);
}
