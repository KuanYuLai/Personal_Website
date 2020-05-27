import React, { Component } from "react";
import styled from "@emotion/styled/macro";
//import link from ReactRouterDom;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-bottom: 3px solid #f0f8ff;
`;

const NavList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  margin: auto 20% auto 0px;
`;

const NavItem = styled.li`
  display: block;
  float: left;
  &:hover {
    border-bottom: 2px solid #00bfff;
  }
  &:active {
    border-bottom: 2px solid #00bfff;
  }
`;

class NavBar extends Component {
  state = {};

  generateNavItem() {}

  render() {
    return (
      <Nav>
        <NavList>
          <NavItem class="nav-item">
            <a class="nav-link" href="/~laik">
              Home
            </a>
          </NavItem>
          <NavItem class="nav-item">
            <a class="nav-link " href="/~laik#About">
              About
            </a>
          </NavItem>
          <NavItem class="nav-item">
            <a class="nav-link " href="/~laik#Projects">
              Projects
            </a>
          </NavItem>
          <NavItem class="nav-item">
            <a class="nav-link " href="/~laik#Contact">
              Contact
            </a>
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default NavBar;
