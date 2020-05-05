import { all, call } from "redux-saga/effects";

// sagas
import { userSagas } from "./user/user.sagas";
import { channelsSagas } from "./channels/channels.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(channelsSagas)]);
}
