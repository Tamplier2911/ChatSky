import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";
const { CHECK_USER_SESSION_START } = userActionTypes;

export function* checkUserSessionStart() {
  try {
    yield put();
  } catch (err) {
    yield put();
  }
}

export function* onCheckUserSessionStart() {
  yield takeLatest(CHECK_USER_SESSION_START, checkUserSessionStart);
}

export function* userSagas() {
  yield all([call(onCheckUserSessionStart)]);
}
