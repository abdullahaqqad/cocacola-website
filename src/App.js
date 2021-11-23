import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/sidebar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
