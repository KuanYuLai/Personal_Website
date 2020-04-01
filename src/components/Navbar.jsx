import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-dark" style={{ border: dashed }}>
        <ul class="nav nav-pills justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Project">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
