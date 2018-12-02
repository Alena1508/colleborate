import { combineReducers } from "redux";
import { routerReducer, RouterState } from "react-router-redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import app, { State as AppState } from "./app";
import user, { State as userState,  } from "./user";

export interface State {
  routing: RouterState;
  form: FormStateMap;
  app: AppState;
  user: userState;
}

export default combineReducers<State>({
  routing: routerReducer,
  form: formReducer,
  app,
  user
});
