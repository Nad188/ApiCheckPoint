import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Users from "./Components/Users/Users";
const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Users}></Route>
    </div>
  );
};
export default App;
