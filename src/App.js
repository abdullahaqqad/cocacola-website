import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/sidebar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.pages";
import Page1 from "./pages/page 1/page1.pages";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <div>
          <SideBar className="sidebar" />
          <div className='pageview'>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/page1" component={Page1} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
