import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { history } from "./redux/reducers";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
    {/* </Router> */}
  </Provider>,
  document.getElementById("root")
);
