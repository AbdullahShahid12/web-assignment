import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testi">
          <Carousel
            slidesPerPage={1}
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
            <div>
              <p>
                Guy and his team were instrumental in getting our product ready
                for prime-time, they helped us implement a software development
                and release process which did wonders to our product quality,
                they seamlessly became an extension of our team and cranked
                through countless user-facing features. Overall, we got
                state-of-the-art software and solid foundations for our stack
                that will allow us to scale.
              </p>
              <h4>Cyrille Habis, CEO of AgriData, Inc.</h4>
            </div>
            <div>
              <p>
                We worked with Guy on the mobile version of our admin dashboard.
                From planning to delivery, Guy went above and beyond for us. He
                was extremely knowledgeable, flexible, and was such a pleasure
                to work with! We give him our warmest recommendation.
              </p>
              <h4>Jesper Klingenberg, Co-founder of Timekit, Inc.</h4>
            </div>
            <div>
              <p>
                Guy is an outstanding software engineer that has helped build
                and architect PalleTech's backend infrastructure. His
                professional discipline towards product quality and proven
                processes has helped us implement solutions that scale. I would
                highly recommend Guy and his team on implementing projects on a
                full breadth of the software stack.
              </p>
              <h4>Anthony Wainman, Co-founder & CTO of PalleTech, Inc.</h4>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Testimonials;
