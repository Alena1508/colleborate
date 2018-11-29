import { all, fork } from "redux-saga/effects";
import { saga as demoRoutineOneSaga } from "../routines/demoRoutineOne";
import { saga as demoRoutineTwoSaga } from "../routines/demoRoutineTwo";
import { saga as SignUpSaga } from "../routines/SignUp";

export default function * root () {
  return yield all([
    fork(demoRoutineOneSaga),
    fork(demoRoutineTwoSaga),
    fork(SignUpSaga)
  ]);
}
