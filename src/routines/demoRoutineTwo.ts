import * as _ from "lodash";
import { Action } from "redux-actions";
import { takeEvery, put, call } from "redux-saga/effects";
import { createRoutine } from "redux-saga-routines";

export interface Payload {
  delay: number;
}

export const action = createRoutine<Payload, Payload>("DEMO_ROUTINE_TWO", _.identity);

async function demoRoutine (delay: number): Promise<number> {
  const timestamp = Date.now();
  await new Promise(resolve => setTimeout(resolve, delay));
  return Date.now() - timestamp;
}

function* handler ({ payload }: Action<Payload>) {
  try {
    yield put(action.request());
    const duration = yield call(demoRoutine, payload!.delay);
    yield put(action.success({ duration }));
  } catch (error) {
    yield put(action.failure(error.message));
  } finally {
    yield put(action.fulfill());
  }
}

export function * saga () {
  yield takeEvery(action.TRIGGER, handler);
}
