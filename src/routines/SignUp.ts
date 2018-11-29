import * as _ from "lodash";
import { Action } from "redux-actions";
import { takeEvery, put, call } from "redux-saga/effects";
import { createRoutine, ReduxFormPayload } from "redux-saga-routines";
import { DemoEntity } from "../models/demoEntity";
import axios  from "axios";

export interface FormValues {
  value: string;
}

export type Payload = ReduxFormPayload<FormValues>;

export const action = createRoutine<Payload, Payload>("CREATE_DEMO_ENTITY", _.identity);

async function signUp (value: string): Promise<DemoEntity> {
  console.log(value, 123123213);
  // NOTE: Here should've been a call to API
  axios.post("http://ccbe3f98.ngrok.io/api/v1/auth/sign-up", value)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return {
    timestamp: Date.now(),
    value
  };
}

function* handler ({ payload }: Action<any>) {
  try {
    yield put(action.request());
    console.log(payload);
    const instance = yield call(signUp, payload.values);
    yield put(action.success({ instance }));
  } catch (error) {
    yield put(action.failure(error.message));
  } finally {
    console.log(123123);
    yield put(action.fulfill());
  }
}

export function * saga () {
  yield takeEvery(action.TRIGGER, handler);
}
