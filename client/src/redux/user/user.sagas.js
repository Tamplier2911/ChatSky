import { takeLatest, put, all, call } from "redux-saga/effects";
import md5 from "md5";
import { auth, getCurrentUser, saveUserToDB } from "../../utils/firebaseConfig";

import {
  formSignupSuccess,
  formSignupFailure,
  emailSignInSuccess,
  emailSignInFailure,
  signUserOutSuccess,
  signUserOutFailure,
  checkUserSessionStart,
  checkUserSessionSuccess,
  checkUserSessionFailure,
} from "./user.actions";

import userActionTypes from "./user.types";
const {
  FORM_SIGN_UP_START,
  EMAIL_SIGN_IN_START,
  SIGN_USER_OUT_START,
  CHECK_USER_SESSION_START,
} = userActionTypes;

export function* formSignUp(action) {
  const { email, password, displayName } = action?.payload;
  try {
    // perform user creation with email and password
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    // create hash
    const hash = yield md5(email);

    // update user profile with name and photo
    yield user.updateProfile({
      displayName: displayName,
      photoURL: `https://gravatar.com/avatar/${hash}?d=identicon`,
    });

    // save user to db
    yield call(saveUserToDB, user);

    // update user session
    yield put(checkUserSessionStart());

    yield put(formSignupSuccess());
  } catch (err) {
    yield put(formSignupFailure(err.message));
  }
}

export function* emailSignIn(action) {
  const { email, password } = action?.payload;
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    if (!user) {
      yield put(emailSignInSuccess(user));
    } else {
      const { uid, email, displayName, photoURL } = user;
      yield put(emailSignInSuccess({ uid, email, displayName, photoURL }));
    }
  } catch (err) {
    yield put(emailSignInFailure(err.message));
  }
}

export function* signUserOut() {
  try {
    yield auth.signOut();
    yield put(signUserOutSuccess());
  } catch (err) {
    yield put(signUserOutFailure(err.message));
  }
}

export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      yield put(checkUserSessionSuccess(userAuth));
    } else {
      const { uid, email, displayName, photoURL } = userAuth;
      yield put(checkUserSessionSuccess({ uid, email, displayName, photoURL }));
    }
  } catch (err) {
    yield put(checkUserSessionFailure(err.message));
  }
}

export function* onFormSignUpStart() {
  yield takeLatest(FORM_SIGN_UP_START, formSignUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onSignUserOutStart() {
  yield takeLatest(SIGN_USER_OUT_START, signUserOut);
}

export function* onCheckUserSessionStart() {
  yield takeLatest(CHECK_USER_SESSION_START, checkUserSession);
}

export function* userSagas() {
  yield all([
    call(onFormSignUpStart),
    call(onEmailSignInStart),
    call(onSignUserOutStart),
    call(onCheckUserSessionStart),
  ]);
}
