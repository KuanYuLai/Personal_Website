import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Cards from "./components/Cards";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Cards />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
