import React, { Component } from "react";
import { getSimilar } from "../services/fakeSimilar";
import Cards from "../components/card";
import Slider from "react-slick";

class Similar extends Component {
  state = {
    data: getSimilar()
  };

  render() {
    let settings = {
      infinite: true,
      speed: 1500,
      swipe: true,
      swipeToSlide: true,
      touchMove: true,
      waitForAnimate: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    return (
      <div className="card-wrapper clearfix">
        <div className="carousel-title">Similar Items</div>
        <Slider {...settings}>
          {this.state.data.map(apparel => (
            <div className="similar-card-wrap clearfix" key={apparel._id}>
              <Cards data={apparel} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Similar;
