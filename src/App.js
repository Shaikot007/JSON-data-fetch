import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";
import Home from "./Components/Home/Home";
import UserDetailsModal from "./Components/UserDetails/UserDetailsModal";
import CreatePost from "./Components/CreatePost/CreatePost";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

library.add(faTrashAlt);

const App = () => {
  return (
    <div className="App">
      <div className="Navbar">
        <div className="TopNavbar">
          <div className="BrandName">
            <Link to="/">
              <Button color="warning">Spekter GmbH</Button>
            </Link>
          </div>
          <div className="PostBox">
            <Link to="/post">
              <Button color="info">Post</Button>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/post">
          <CreatePost />
        </Route>
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
