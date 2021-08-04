import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";
import Home from "./Components/Home/Home";
import UserDetailsModal from "./Components/UserDetails/UserDetailsModal";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

library.add(faTrashAlt);

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
          <Route path="/:id">
            <UserDetailsModal />
          </Route>
        </Route>
      </Switch>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
};

export default AppWrapper;
