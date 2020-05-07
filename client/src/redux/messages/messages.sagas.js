import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  createOneMessageSuccess,
  createOneMessageFailure,
  loadAllMessagesSuccess,
  loadAllMessagesFailure,
} from "./messages.actions";

import messagesTypes from "./messages.types";
const { CREATE_ONE_MESSAGE_START, LOAD_ALL_MESSAGES_START } = messagesTypes;

// channelID
//     messageID
//         content "hello"
//         timestamp 15.05.2020
//         user {
//             id
//             displayname
//             avatar
//         }

export function* createOneMessage(action) {
  console.log(action);
  const { user, channel, messageContent } = action.payload;
  console.log(user, channel, messageContent, "from saga");
  try {
  } catch (err) {}
}

export function* loadAllMessages() {
  console.log("from saga");
  try {
  } catch (err) {}
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
