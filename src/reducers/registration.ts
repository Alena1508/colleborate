import { Action } from "redux-actions";
import * as Actions from "../actions";
import { User } from "../models/User";

export interface State {
  list: User[];
}

const initialState: State = {
  list: []
};

export default function registration (state: State = initialState, action: Action<any>): State {
  switch (action.type) {
    case Actions.SignUpAction.SUCCESS:
      return { ...action.payload.instance};
    default:
      return state;
  }
}
