import { all, fork } from "redux-saga/effects";
import { saga as SignUpSaga } from "../routines/SignUp";
import { saga as SignInSaga } from "../routines/SignIn";

export default function * root () {
  return yield all([
    fork(SignUpSaga),
    fork(SignInSaga)
  ]);
}
