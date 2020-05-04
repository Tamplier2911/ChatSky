import { combineReducers } from "redux";

// reducers
import userReducer from "./user/user.reducer";
import sidenavReducer from "./sidenav/sidenav.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  sidenav: sidenavReducer,
});

export default rootReducer;
