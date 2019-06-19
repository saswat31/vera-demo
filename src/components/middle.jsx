import React, { Component } from "react";

class Middle extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="res_1440">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1440_4.png")}
              alt="4th"
            />
          </div>
        </div>
        <div className="res_1080">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1080_4.png")}
              alt="4th"
            />
          </div>
        </div>
        <div className="res_mob">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_5.png")}
              alt="4th"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Middle;
