import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  createMessageInDB,
  loadAllMessagesFromDB,
} from "../../utils/firebaseConfig";

import {
  createOneMessageSuccess,
  createOneMessageFailure,
  loadAllMessagesStart,
  loadAllMessagesSuccess,
  loadAllMessagesFailure,
} from "./messages.actions";

import messagesTypes from "./messages.types";
const { CREATE_ONE_MESSAGE_START, LOAD_ALL_MESSAGES_START } = messagesTypes;

export function* createOneMessage(action) {
  const { user, channel, messageContent } = action.payload;
  try {
    yield call(createMessageInDB, { user, channel, messageContent });
    yield put(createOneMessageSuccess());
    yield put(loadAllMessagesStart(channel.id));
  } catch (err) {
    yield put(createOneMessageFailure(err.message));
  }
}

export function* loadAllMessages(action) {
  try {
    const res = yield call(loadAllMessagesFromDB, action.payload);
    yield put(loadAllMessagesSuccess(res));
  } catch (err) {
    yield put(loadAllMessagesFailure(err.message));
  }
}

export function* onCreateOneMessageStart() {
  yield takeLatest(CREATE_ONE_MESSAGE_START, createOneMessage);
}

export function* onLoadAllMessagesStart() {
  yield takeLatest(LOAD_ALL_MESSAGES_START, loadAllMessages);
}

export function* messagesSagas() {
  yield all([call(onCreateOneMessageStart), call(onLoadAllMessagesStart)]);
}
