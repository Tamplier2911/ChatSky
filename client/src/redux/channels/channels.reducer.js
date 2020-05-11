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

const INITIAL_STATE = {
  allChannels: [],
  currentChannel: {},
  isLoading: false,
  errorMessage: "",
};

const channelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NEW_CHANNEL_START:
    case LOAD_ALL_CHANNELS_START:
    case DELETE_ONE_CHANNEL_START:
      return { ...state, isLoading: true };
    case CREATE_NEW_CHANNEL_SUCCESS:
    case DELETE_ONE_CHANNEL_SUCCESS:
      return { ...state, isLoading: false };
    case LOAD_ALL_CHANNELS_SUCCESS:
      return { ...state, allChannels: action.payload, isLoading: false };
    case CREATE_NEW_CHANNEL_FAILURE:
    case LOAD_ALL_CHANNELS_FAILURE:
    case DELETE_ONE_CHANNEL_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };
    case SET_CURRENT_CHANNEL:
      return { ...state, currentChannel: action.payload };
    default:
      return state;
  }
};

export default channelsReducer;
