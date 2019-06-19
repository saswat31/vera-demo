import React, { Component } from "react";
import { getSimilarScroll } from "../services/fakeSimilar";
import Cards from "../components/card";

class SimilarScroll extends Component {
  state = {
    data: getSimilarScroll()
  };

  render() {
    return (
      <div className="similar-scroll-wrap card-wrapper clearfix">
        <div className="carousel-title">Similar Items</div>
        {this.state.data.map(apparel => (
          <div className="similar-card-wrap clearfix" key={apparel._id}>
            <Cards data={apparel} />
          </div>
        ))}
      </div>
    );
  }
}

export default SimilarScroll;
