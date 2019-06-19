import React, { Component } from "react";

class Before extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="res_1440">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1440_1.png")}
              alt="1st"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1440_2.png")}
              alt="2nd"
            />
          </div>
        </div>
        <div className="res_1080">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1080_1.png")}
              alt="1st"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1080_2.png")}
              alt="2nd"
            />
          </div>
        </div>
        <div className="res_mob">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_1.png")}
              alt="1st"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_2.png")}
              alt="2nd"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_3.png")}
              alt="3rd"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Before;
