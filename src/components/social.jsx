import React, { Component } from "react";
import { getSocial } from "../services/fakeSocial";
import Cards from "../components/card";
import Slider from "react-slick";
import { Tweet } from "react-twitter-widgets";
import PinterestWidget from "../components/pinterest";
import InstagramEmbed from "react-instagram-embed";

class Social extends Component {
  state = {
    data: getSocial()
  };

  render() {
    let settings2 = {
      infinite: true,
      swipe: true,
      swipeToSlide: true,
      touchMove: true,
      waitForAnimate: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="social-container">
        <div className="carousel-title">Shop the look</div>
        <Slider {...settings2}>
          {this.state.data.map(socialdata => (
            <div
              className="social-wrapper-container"
              key={socialdata.socialimg._id}
            >
              <div className="social-wrapper clearfix">
                <div className="social-img">
                  {this.getHandler(
                    socialdata.socialimg.handler,
                    socialdata.socialimg._id,
                    socialdata.socialimg.img
                  )}
                </div>
                <div className="social-card-wrap clearfix">
                  {socialdata.apparel.map(apparel => (
                    <Cards data={apparel} key={apparel._id} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  getHandler(handler, pin, imageUrl) {
    if (handler === "twitter") {
      return <Tweet tweetId={pin} />;
    } else if (handler === "instagram") {
      let url = "https://instagr.am/p/" + pin + "/";
      return (
        <InstagramEmbed
          url={url}
          maxWidth={240}
          hideCaption={false}
          containerTagName="div"
        />
      );
    } else if (handler === "pinterest") {
      return <PinterestWidget id={pin} />;
    } else {
      return <img className="social-image" src={imageUrl} alt="Social" />;
    }
  }
}

export default Social;
