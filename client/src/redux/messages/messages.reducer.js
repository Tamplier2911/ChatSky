import messagesTypes from "./messages.types";

const {
  CREATE_ONE_MESSAGE_START,
  CREATE_ONE_MESSAGE_SUCCESS,
  CREATE_ONE_MESSAGE_FAILURE,
  LOAD_ALL_MESSAGES_START,
  LOAD_ALL_MESSAGES_SUCCESS,
  LOAD_ALL_MESSAGES_FAILURE,
} = messagesTypes;

const INITIAL_STATE = {
  allMessages: [],
  isLoading: false,
  errMessage: "",
};

const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ONE_MESSAGE_START:
    case LOAD_ALL_MESSAGES_START:
      return { ...state, isLoading: true };
    case CREATE_ONE_MESSAGE_SUCCESS:
      return { ...state, isLoading: false };
    case LOAD_ALL_MESSAGES_SUCCESS:
      return { ...state, isLoading: false, allMessages: action.payload };
    case CREATE_ONE_MESSAGE_FAILURE:
    case LOAD_ALL_MESSAGES_FAILURE:
      return { ...state, isLoading: false, errMessage: action.payload };
    default:
      return state;
  }
};

export default messagesReducer;
