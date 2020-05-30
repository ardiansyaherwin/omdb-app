import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./rootSagas";
import rootReducers from "./rootReducers";

let composeEnhancers = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
// connect sagas
const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ]
const enhancers = [applyMiddleware(...middlewares)];

// pass data from reducers/index into store
const store = createStore(
  rootReducers,
  composeEnhancers(...enhancers)
);
sagaMiddleware.run(rootSagas);

export default store

