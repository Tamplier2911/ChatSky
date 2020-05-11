import channelsTypes from "./channels.types";

const {
  CREATE_NEW_CHANNEL_START,
  CREATE_NEW_CHANNEL_SUCCESS,
  CREATE_NEW_CHANNEL_FAILURE,
  LOAD_ALL_CHANNELS_START,
  LOAD_ALL_CHANNELS_SUCCESS,
  LOAD_ALL_CHANNELS_FAILURE,
  DELETE_ONE_CHANNEL_START,
  DELETE_ONE_CHANNEL_SUCCESS,
  DELETE_ONE_CHANNEL_FAILURE,
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

export const deleteOneChannelStart = (channelId) => ({
  type: DELETE_ONE_CHANNEL_START,
  payload: channelId,
});

export const deleteOneChannelSuccess = () => ({
  type: DELETE_ONE_CHANNEL_SUCCESS,
});

export const deleteOneChannelFailure = () => ({
  type: DELETE_ONE_CHANNEL_FAILURE,
});
