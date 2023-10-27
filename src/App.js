import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Router>
        <Switch>
          <Route path="/Dashboard">
            {loggedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {loggedIn ? (
              <Redirect to="/Dashboard" />
            ) : (
              <Form parentCallback={callbackFunction} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
