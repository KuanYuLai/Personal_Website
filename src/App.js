import React, { Component } from "react";
import { Global, css } from "@emotion/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./App.css";

//import components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
//Import different pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ErrorPage from "./pages/ErrorPage";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  body {
    font-family: "Roboto", sans-serif;
    font-size: 180px;
  }
`;

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Global style={globalStyles} />
        <NavBar />

        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Project" component={ProjectPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
