import sidenavTypes from "./sidenav.types";
const { TOGGLE_SIDENAV } = sidenavTypes;

const INITIAL_STATE = {
  sidenavHidden: true,
};

const sidenavReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      return { ...state, sidenavHidden: !state.sidenavHidden };
    default:
      return state;
  }
};

export default sidenavReducer;
