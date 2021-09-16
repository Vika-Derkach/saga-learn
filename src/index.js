import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import App from "./pages/App";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import store from "./redux/index";

const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
