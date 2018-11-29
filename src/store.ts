import { createStore as createReduxStore, applyMiddleware, compose } from "redux";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { routinePromiseWatcherSaga } from "redux-saga-routines";
import {
  createMiddleware as createStorageMiddleware,
  reducer as storageReducer,
  StorageEngine
} from "redux-storage";
// import { logger as loggerMiddleware } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from "history";
import rootSaga from "./sagas";
import reducers from "./reducers";
import config from "./config";

export function createStore(storageEngine: StorageEngine, history: History) {
  const storageMiddleware = createStorageMiddleware(storageEngine);
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);

  const middlewares = [storageMiddleware, sagaMiddleware, routerMiddleware];
  if (config.isDevelopment) {
    // middlewares.push(loggerMiddleware);
  }

  const composeWrapper = config.isDevelopment ? composeWithDevTools({}) : compose;

  const store = createReduxStore(
    storageReducer(reducers),
    composeWrapper(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(routinePromiseWatcherSaga);

  return store;
}
