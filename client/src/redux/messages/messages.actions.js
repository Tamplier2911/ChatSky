import messagesTypes from "./messages.types";

const {
  CREATE_ONE_MESSAGE_START,
  CREATE_ONE_MESSAGE_SUCCESS,
  CREATE_ONE_MESSAGE_FAILURE,
  LOAD_ALL_MESSAGES_START,
  LOAD_ALL_MESSAGES_SUCCESS,
  LOAD_ALL_MESSAGES_FAILURE,
} = messagesTypes;

export const createOneMessageStart = (messageData) => ({
  type: CREATE_ONE_MESSAGE_START,
  payload: messageData,
});

export const createOneMessageSuccess = () => ({
  type: CREATE_ONE_MESSAGE_SUCCESS,
});

export const createOneMessageFailure = (errMessage) => ({
  type: CREATE_ONE_MESSAGE_FAILURE,
  payload: errMessage,
});

export const loadAllMessagesStart = () => ({
  type: LOAD_ALL_MESSAGES_START,
});

export const loadAllMessagesSuccess = (messages) => ({
  type: LOAD_ALL_MESSAGES_SUCCESS,
  payload: messages,
});

export const loadAllMessagesFailure = (errMessage) => ({
  type: LOAD_ALL_MESSAGES_FAILURE,
  payload: errMessage,
});
