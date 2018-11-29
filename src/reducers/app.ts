import { Action } from "redux";
import * as Actions from "../actions";

export interface State {
  isSideMenuOpened: boolean;
}

const initialState: State = {
  isSideMenuOpened: false
};

export default function app (state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.openSideMenu.PERFORM:
      return { ...state, isSideMenuOpened: true };
    case Actions.closeSideMenu.PERFORM:
      return { ...state, isSideMenuOpened: false };
    default:
      return state;
  }
}
