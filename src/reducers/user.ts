import { Action } from "redux-actions";
import * as Actions from "../actions";
import { User } from "../models/User";

export interface State {
  firstName: User["firstName"];
  lastName: User["lastName"];
  email: User["email"];
  proficiency: User["proficiency"];
  shortDescription: User["shortDescription"];
  customField: User["customField"];
}

const initialState: State = {
  firstName: "",
  lastName: "",
  email: "",
  proficiency: "",
  shortDescription: "",
  customField: "",
};

export default function userDataReducer (state: State = initialState, action: Action<any>): State {
  switch (action.type) {
    case Actions.SignUpAction.REQUEST:
      return {
        ...state,
        // isLoading: true
      };
    case Actions.SignUpAction.SUCCESS:
      return {
        ...state,
        // isLoading: false
        ...action.payload.instance
      };
    case Actions.SignUpAction.FAILURE:
      return {
        ...state,
        // isLoading: false
        // errors: ...action.payload
      };
    case Actions.SignInAction.SUCCESS:
      return {
        ...state,
        ...action.payload.instance
      };

    // case Actions.demoRoutineOneAction.REQUEST:
    //   return { ...state, count: state.count + 1 };
    // case Actions.demoRoutineOneAction.SUCCESS:
    // case Actions.demoRoutineTwoAction.SUCCESS:
    //   return { ...state, recentResults: [ action, ...state.recentResults ].slice(0, 20) };
    // case Actions.demoRoutineOneAction.FULFILL:
    // case Actions.demoRoutineTwoAction.FULFILL:
    //   return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
