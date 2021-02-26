import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
import AppNavigator from "./src/navigation/authNavigator";

const App = AppNavigator;

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const _XHR = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

XMLHttpRequest = _XHR;

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
