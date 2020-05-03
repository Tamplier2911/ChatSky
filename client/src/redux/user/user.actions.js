import userActionTypes from "./user.types";

const {
  FORM_SIGN_UP_START,
  FORM_SIGN_UP_SUCCESS,
  FORM_SIGN_UP_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
  SIGN_USER_OUT_START,
  SIGN_USER_OUT_SUCCESS,
  SIGN_USER_OUT_FAILURE,
  CHECK_USER_SESSION_START,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
} = userActionTypes;

export const formSignupStart = (userCredentials) => ({
  type: FORM_SIGN_UP_START,
  payload: userCredentials,
});

export const formSignupSuccess = () => ({
  type: FORM_SIGN_UP_SUCCESS,
});

export const formSignupFailure = (errorMessage) => ({
  type: FORM_SIGN_UP_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = (userCredentials) => ({
  type: EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const emailSignInSuccess = (user) => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (errorMessage) => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signUserOutStart = () => ({
  type: SIGN_USER_OUT_START,
});

export const signUserOutSuccess = () => ({
  type: SIGN_USER_OUT_SUCCESS,
});

export const signUserOutFailure = (errorMessage) => ({
  type: SIGN_USER_OUT_FAILURE,
  payload: errorMessage,
});

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
