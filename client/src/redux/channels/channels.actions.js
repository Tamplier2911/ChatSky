import channelsTypes from "./channels.types";

const {
  CREATE_NEW_CHANNEL_START,
  CREATE_NEW_CHANNEL_SUCCESS,
  CREATE_NEW_CHANNEL_FAILURE,
  LOAD_ALL_CHANNELS_START,
  LOAD_ALL_CHANNELS_SUCCESS,
  LOAD_ALL_CHANNELS_FAILURE,
  SET_CURRENT_CHANNEL,
} = channelsTypes;

export const createNewChannelStart = (channelData) => ({
  type: CREATE_NEW_CHANNEL_START,
  payload: channelData,
});

export const createNewChannelSuccess = () => ({
  type: CREATE_NEW_CHANNEL_SUCCESS,
});

export const createNewChannelFailure = (errorMessage) => ({
  type: CREATE_NEW_CHANNEL_FAILURE,
  payload: errorMessage,
});

export const loadAllChannelsStart = () => ({
  type: LOAD_ALL_CHANNELS_START,
});

export const loadAllChannelsSuccess = (channels) => ({
  type: LOAD_ALL_CHANNELS_SUCCESS,
  payload: channels,
});

export const loadAllChannelsFailure = (errorMessage) => ({
  type: LOAD_ALL_CHANNELS_FAILURE,
  payload: errorMessage,
});

export const setCurrentChannel = (channel) => ({
  type: SET_CURRENT_CHANNEL,
  payload: channel,
});
