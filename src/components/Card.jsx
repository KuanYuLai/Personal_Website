import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Card extends Component {
  state = {};

  render() {
    return (
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src={require(`../pics/${this.props.Name}.png`)}
          className="card-img-top"
          alt="Image"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.Name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={this.props.URL} className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
