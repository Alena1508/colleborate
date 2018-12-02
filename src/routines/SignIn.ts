import * as _ from "lodash";
import { Action } from "redux-actions";
import { takeEvery, put, call } from "redux-saga/effects";
import { createRoutine, ReduxFormPayload } from "redux-saga-routines";
import axios  from "axios";
import { AxiosResponse } from  "axios";
import { User } from "../models/User";
import setAuthToken from "../helpers/setAuthToken";

export interface FormValues {
  value: string;
}

export type Payload = ReduxFormPayload<FormValues>;

type Query = AxiosResponse<User>;

export const action = createRoutine<Payload, Payload>("SIGN_IN", _.identity);

async function signIn (value: {email: string, password: string}): Promise<Query> {
  // NOTE: Here should've been a call to API
  return new Promise((resolve, reject) => {
    axios.post("http://ccbe3f98.ngrok.io/api/v1/auth/sign-in", value)
      .then(function (response: Query) {
        console.log(response);
        const resp: any = response.data;
        resolve(resp);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
}

function* handler ({ payload }: Action<any>) {
  try {
    yield put(action.request());
    console.log("request login");
    const instance = yield call(signIn, payload.values);
    console.log("instance in login", instance);
    yield put(action.success({ instance }));
    yield call(setAuthToken, instance.token.accessToken);
  } catch (error) {
    yield put(action.failure(error.message));
  } finally {
    yield put(action.fulfill());
  }
}

export function * saga () {
  yield takeEvery(action.TRIGGER, handler);
}
