import { createStore, applyMiddleware } from "redux";

// middlewares
import logger from "redux-logger";

// redux-saga
import createSagaMiddleware from "redux-saga";

// root saga
import rootSaga from "./root.saga";

// root reducer
import rootReducer from "./root.reducer";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// middleware stack
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// use saga
sagaMiddleware.run(rootSaga);
