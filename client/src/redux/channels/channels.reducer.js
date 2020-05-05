import channelsTypes from "./channels.types";
const {
  CREATE_NEW_CHANNEL_START,
  CREATE_NEW_CHANNEL_SUCCESS,
  CREATE_NEW_CHANNEL_FAILURE,
  LOAD_ALL_CHANNELS_START,
  LOAD_ALL_CHANNELS_SUCCESS,
  LOAD_ALL_CHANNELS_FAILURE,
} = channelsTypes;

const INITIAL_STATE = {
  allChannels: [],
  isLoading: false,
  errorMessage: "",
};

const channelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NEW_CHANNEL_START:
    case LOAD_ALL_CHANNELS_START:
      return { ...state, isLoading: true };
    case CREATE_NEW_CHANNEL_SUCCESS:
      return { ...state, isLoading: false };
    case LOAD_ALL_CHANNELS_SUCCESS:
      return { ...state, allChannels: action.payload, isLoading: false };
    case CREATE_NEW_CHANNEL_FAILURE:
    case LOAD_ALL_CHANNELS_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default channelsReducer;
