import userActionTypes from "./user.types";

const {
  FORM_SIGN_UP_START,
  FORM_SIGN_UP_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
  SIGN_USER_OUT_SUCCESS,
  SIGN_USER_OUT_FAILURE,
  CHECK_USER_SESSION_START,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
} = userActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_SIGN_UP_START:
    case EMAIL_SIGN_IN_START:
    case CHECK_USER_SESSION_START:
      return { ...state, isLoading: true };
    case EMAIL_SIGN_IN_SUCCESS:
    case CHECK_USER_SESSION_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        errorMessage: null,
      };
    case SIGN_USER_OUT_SUCCESS:
      return { ...state, currentUser: null, errorMessage: null };
    case FORM_SIGN_UP_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
    case SIGN_USER_OUT_FAILURE:
    case CHECK_USER_SESSION_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
