import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  createNewChannelSuccess,
  createNewChannelFailure,
  loadAllChannelsSuccess,
  loadAllChannelsFailure,
} from "./channels.actions";

import channelsTypes from "./channels.types";
const { CREATE_NEW_CHANNEL_START, LOAD_ALL_CHANNELS_START } = channelsTypes;

export function* createNewChannel(action) {
  console.log(action);
  console.log("hi from saga");
  try {
    yield put(createNewChannelSuccess());
  } catch (err) {
    // put();
  }
}

export function* onCreateNewChannelStart() {
  yield takeLatest(CREATE_NEW_CHANNEL_START, createNewChannel);
}

export function* channelsSagas() {
  yield all([call(onCreateNewChannelStart)]);
}
