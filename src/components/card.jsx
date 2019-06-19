import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div className="card-container" key={this.props.data._id}>
        <div className="card-img-wrapper">
          <img src={this.props.data.img} alt="Apparel" />
        </div>
        <div className="card-price">
          <span className="card-value">{this.props.data.title}</span>
        </div>
        <div className="card-name">
          <span className="card-value">{this.props.data.vendor}</span>
        </div>
      </div>
    );
  }
}

export default Cards;
