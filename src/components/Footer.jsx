import React, { Component } from "react";
import reactLogo from "../static/ReactLogo.svg";
import styled from "@emotion/styled/macro";

const FooterContainer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 25px;
  font-size: 14px;
  color: #aaa;
  background-color: #333;
  text-align: center;
  a {
    color: #fff;
  }
`;

const ReactLogoImg = styled.img`
  animation: ${spin} infinite 20s linear;
  vertical-align: middle;
  height: 24px;
`;

function FooterMaker() {
  return (
    <FooterContainer>
      <ReactLogoImg src={reactLogo} alt="React logo" />
      This site is powered by{" "}
      <a
        href="https://facebook.github.io/react/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
      . It was bootstrapped with{" "}
      <a
        href="https://github.com/facebookincubator/create-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Create React App
      </a>
      . The source code is{" "}
      <a
        href="https://github.com/robwhess/my-osu-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        on GitHub <FontAwesomeIcon icon={faGithub} />
      </a>
      .
    </FooterContainer>
  );
}

class Footer extends Component {
  state = {};
  render() {
    return this.FooterMaker();
  }
}

export default Footer;
