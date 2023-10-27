// Can be removed, only purpose is to show redirect working
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
    // <Redirect to="/" />
  }

  return (
    <div>
      <button className="testButton" type="button" onClick={handleClick}>
        Test Redirect
      </button>
      {/* <small>Button trys to take user to '/'</small> */}
    </div>
  );
}

export default HomeButton;
