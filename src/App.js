import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";
import Home from "./Components/Home/Home";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTrashAlt);

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default AppWrapper;
