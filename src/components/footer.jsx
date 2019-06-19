import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="res_1440">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1440_footer.png")}
              alt="footer"
            />
          </div>
        </div>
        <div className="res_1080">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/1080_footer.png")}
              alt="footer"
            />
          </div>
        </div>
        <div className="res_mob">
          <div className="img-wrap">
            <img
              className="img-wrap"
              src={require("../images/mob_footer.png")}
              alt="footer"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
