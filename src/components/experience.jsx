import React, { Component } from "react";
import boe from "../images/boe.jpg";
import micro from "../images/micro.jpg";
import nin from "../images/nin.jpg";
import yam from "../images/yam.jpg";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <h2>Experience</h2>
        <p>
          Our team has experience working at Microsoft, Yammer, Nintendo, Boeing
          and many startups.
        </p>
        <div className="carousel">
          <Carousel
            slidesPerPage={3.5}
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
            <img src={micro} width="100%" height="auto" />
            <img src={yam} width="100%" height="auto" />
            <img src={boe} width="100%" height="auto" />
            <img src={nin} width="100%" height="auto" />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Experience;
