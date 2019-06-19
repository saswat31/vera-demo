import React, { Component } from "react";

class After extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="res_1440">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1440_6.png")}
              alt="6th"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1440_7.png")}
              alt="7th"
            />
          </div>
          {/* <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1440_8.png")}
              alt="8th"
            />
          </div> */}
        </div>
        <div className="res_1080">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1080_4.png")}
              alt="7th"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1080_5.png")}
              alt="8th"
            />
          </div>
          {/* <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1080_6.png")}
              alt="9th"
            />
          </div> */}
        </div>
        <div className="res_mob">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_5.png")}
              alt="7th"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_6.png")}
              alt="8th"
            />
          </div>
          {/* <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_7.png")}
              alt="9th"
            />
          </div> */}
          {/* <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_11.png")}
              alt="9th"
            />
          </div>
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_12.png")}
              alt="9th"
            />
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default After;
