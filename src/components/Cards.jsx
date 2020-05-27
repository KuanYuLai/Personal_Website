import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import styled from "@emotion/styled/macro";
import project_data from "../data/projects.json";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 500px) {
    display: block;
  }
`;

class Cards extends Component {
  state = {
    data: project_data,
  };
  render() {
    return (
      <CardsContainer className="container">
        {this.state.data.map((projects) => (
          <Card
            className="col"
            URL={projects.URL}
            Git_URL={projects.Github}
            key={projects.Name}
            Name={projects.Name}
            Description={projects.Description}
            Picture={projects.Picture}
          />
        ))}
      </CardsContainer>
    );
  }
}

export default Cards;
