import { Action } from "redux-actions";
import * as Actions from "../actions";
import { DemoEntity } from "../models/demoEntity";

export interface State {
  list: DemoEntity[];
}

const initialState: State = {
  list: []
};

export default function demoEntities (state: State = initialState, action: Action<any>): State {
  switch (action.type) {
    case Actions.SignUpAction.SUCCESS:
      return { ...state, list: [ ...state.list, action.payload.instance ] };
    default:
      return state;
  }
}
