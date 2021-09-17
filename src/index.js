import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import App from "./pages/App";
import NotFound from "./pages/NotFound";
import store from "./redux";
import { history } from "./redux/reducers";
ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ConnectedRouter>
    {/* </Router> */}
  </Provider>,
  document.getElementById("root")
);
