import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
