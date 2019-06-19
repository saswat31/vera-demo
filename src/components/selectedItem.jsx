import React, { Component } from "react";
import { getApparels } from "../services/fakeApparel";

class SelectedItem extends Component {
  state = {
    data: getApparels()
  };
  render() {
    return (
      <div className="selectedItem-wrapper">
        <div className="selectedItem-img-wrapper">
          <img src={this.state.data.img} alt="Selected Apparel" />
        </div>
        <div className="selectedItem-title">
          <span className="selectedItem-text">Apparel Name : </span>
          <span className="selectedItem-value">{this.state.data.title}</span>
        </div>
        <div className="selectedItem-vendor">
          <span className="selectedItem-text">Vendor Name : </span>
          <span className="selectedItem-value">{this.state.data.vendor}</span>
        </div>
        <div className="selectedItem-color">
          <span className="selectedItem-text">Color : </span>
          <span className="selectedItem-value">{this.state.data.color}</span>
        </div>
      </div>
    );
  }
}

export default SelectedItem;
