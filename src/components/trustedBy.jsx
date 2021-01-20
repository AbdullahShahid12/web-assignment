import React, { Component } from "react";
import agri from "../images/agri.jpg";
import cond from "../images/cond.jpg";
import joud from "../images/joud.jpg";
import palle from "../images/palle.jpg";
import time from "../images/time.jpg";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
class TrustedBy extends Component {
  state = {};
  render() {
    return (
      <div className="trust">
        <h2>Trusted By</h2>
        <div className="tr">
          <Carousel
            slidesPerPage={3}
            slidesPerScroll={1}
            clickToChange
            arrows
            breakpoints={{
              1000: {
                // these props will be applied when screen width is less than 1000px
                slidesPerPage: 1,
                clickToChange: false,
                centered: false,
                arrows: true,
                infinite: false,
              },
              500: {
                slidesPerPage: 1,
                slidesPerScroll: 1,
                clickToChange: false,
                centered: false,

                animationSpeed: 2000,
                infinite: false,
              },
            }}
          >
            <img src={joud} width="100%" height="auto" />
            <img src={agri} width="100%" height="auto" />
            <img src={cond} width="100%" height="auto" />
            <img src={time} width="100%" height="auto" />
            <img src={palle} width="100%" height="auto" />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default TrustedBy;
