import { Action } from "redux-actions";
import * as Actions from "../actions";

export interface State {
  count: number;
  recentResults: Action<any>[];
}

const initialState: State = {
  count: 0,
  recentResults: []
};

export default function demoRoutines (state: State = initialState, action: Action<any>): State {
  switch (action.type) {
    case Actions.demoRoutineOneAction.REQUEST:
    case Actions.demoRoutineTwoAction.REQUEST:
      return { ...state, count: state.count + 1 };
    case Actions.demoRoutineOneAction.SUCCESS:
    case Actions.demoRoutineTwoAction.SUCCESS:
      return { ...state, recentResults: [ action, ...state.recentResults ].slice(0, 20) };
    case Actions.demoRoutineOneAction.FULFILL:
    case Actions.demoRoutineTwoAction.FULFILL:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
