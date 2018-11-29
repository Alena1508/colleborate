import { combineReducers } from "redux";
import { routerReducer, RouterState } from "react-router-redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import app, { State as AppState } from "./app";
import demoRoutines, { State as DemoRoutinesState } from "./demoRoutines";
import demoEntities, { State as DemoEntitiesState } from "./demoEntities";

export interface State {
  routing: RouterState;
  form: FormStateMap;
  app: AppState;
  demoRoutines: DemoRoutinesState;
  demoEntities: DemoEntitiesState;
}

export default combineReducers<State>({
  routing: routerReducer,
  form: formReducer,
  app,
  demoRoutines,
  demoEntities
});
