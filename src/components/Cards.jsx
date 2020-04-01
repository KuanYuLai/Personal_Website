import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import styled from "@emotion/styled/macro";

const CardsContainer = styled.div`
  width: 100%;
  border-style: dotted;
`;

class Cards extends Component {
  state = {
    URL: "http://web.engr.oregonstate.edu/~laik/",
    projects: ["Weather", "Zombie Project"]
  };

  render() {
    return (
      <CardsContainer className="container">
        <div className="row">
          {this.state.projects.map(projects => (
            <Card
              className="col"
              URL={this.state.URL + projects}
              key={projects}
              Name={projects}
            />
          ))}
        </div>
      </CardsContainer>
    );
  }
}

export default Cards;
