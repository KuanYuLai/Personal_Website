import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import avatar from "../static/Animoji.jpg";

const ProfileImg = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`;

const ProfileContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

class HomePage extends Component {
  state = {};

  render() {
    return (
      <ProfileContainer>
        <ProfileImg src={avatar} />
      </ProfileContainer>
    );
  }
}

export default HomePage;
