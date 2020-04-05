import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import styled from "@emotion/styled/macro";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 500px) {
    display: block;
  }
`;

class Cards extends Component {
  state = {
    URL: "http://web.engr.oregonstate.edu/~laik/",
    GithubURL: "https://github.com/KuanYuLai/",
    projects: ["Weather", "Zombie"],
  };

  render() {
    return (
      <CardsContainer className="container">
        {this.state.projects.map((projects) => (
          <Card
            className="col"
            URL={this.state.URL + projects}
            Git_URL={this.state.GithubURL + projects}
            key={projects}
            Name={projects}
          />
        ))}
      </CardsContainer>
    );
  }
}

export default Cards;
