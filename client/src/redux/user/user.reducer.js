import userActionTypes from "./user.types";

const {
  CHECK_USER_SESSION_START,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
} = userActionTypes;

const INITIAL_STATE = {
  currentUser: {},
  isLoading: false,
  errorMessage: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_USER_SESSION_START:
    case CHECK_USER_SESSION_SUCCESS:
    case CHECK_USER_SESSION_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
