import userActionTypes from "./user.types";

const {
  CHECK_USER_SESSION_START,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
} = userActionTypes;

export const checkUserSessionStart = () => ({
  type: CHECK_USER_SESSION_START,
});

export const checkUserSessionSuccess = (user) => ({
  type: CHECK_USER_SESSION_SUCCESS,
  payload: user,
});

export const checkUserSessionFailure = (errorMessage) => ({
  type: CHECK_USER_SESSION_FAILURE,
  payload: errorMessage,
});
