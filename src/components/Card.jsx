import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "@emotion/styled/macro";
import Cards from "./Cards";

const CardTop = styled.div`
  position: relative;
`;

const CardTemp = styled.div`
  display: block;
  width: 20rem;
  margin: 20px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    display: block;
    width: 100%;
    height: 200px;
  }
`;

const Title = styled.h5`
  position: absolute;
  top: 80%;
  left: 5%;
  text-align: center;
`;

class Card extends Component {
  state = {};

  generateCard() {
    return (
      <CardTemp class="card">
        <CardTop>
          <img
            src={require(`../static/${this.props.Picture}`)}
            className="card-img-top"
            alt="Preview"
          />
          <Title>
            <h5 class="card-title">{this.props.Name}</h5>
          </Title>
        </CardTop>
        <div class="card-body">
          <p class="card-text">{this.props.Description}</p>

          {/* <a href={this.props.URL} class="card-link">
            Live Demo
    </a> */}

          <a href={this.props.Git_URL} class="card-link">
            View Code
          </a>
        </div>
      </CardTemp>
    );
  }

  render() {
    return this.generateCard();
  }
}

export default Card;
