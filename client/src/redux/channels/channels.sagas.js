import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  createChannelInDB,
  loadAllChannelsFromDB,
} from "../../utils/firebaseConfig";

import {
  createNewChannelSuccess,
  createNewChannelFailure,
  loadAllChannelsStart,
  loadAllChannelsSuccess,
  loadAllChannelsFailure,
  setCurrentChannel,
} from "./channels.actions";
import { closeModal } from "../modal/modal.actions";

import channelsTypes from "./channels.types";
const { CREATE_NEW_CHANNEL_START, LOAD_ALL_CHANNELS_START } = channelsTypes;

export function* createNewChannel(action) {
  const {
    channelData: { name, desc },
    user: { uid, displayName, photoURL },
  } = action.payload;
  try {
    yield call(createChannelInDB, {
      name,
      desc,
      createdBy: { uid, displayName, photoURL },
    });
    yield put(createNewChannelSuccess());
    yield put(loadAllChannelsStart());
    yield put(closeModal());
  } catch (err) {
    put(createNewChannelFailure(err.message));
  }
}

export function* loadAllChannels() {
  try {
    const res = yield call(loadAllChannelsFromDB);
    yield put(loadAllChannelsSuccess(res));
    yield put(setCurrentChannel(res[0]));
  } catch (err) {
    yield put(loadAllChannelsFailure(err.message));
  }
}

export function* onCreateNewChannelStart() {
  yield takeLatest(CREATE_NEW_CHANNEL_START, createNewChannel);
}

export function* onLoadAllChannelsStart() {
  yield takeLatest(LOAD_ALL_CHANNELS_START, loadAllChannels);
}

export function* channelsSagas() {
  yield all([call(onCreateNewChannelStart), call(onLoadAllChannelsStart)]);
}
