import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

function Carousel() {
  var settings = {
    dots: true,
    dotsClass:'dots',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="img/sector1.png"
          alt="image2"
          width="90%"
          height="550px"
          className="img"
        ></img>
      </div>
      <div>
        <img
          src="img/sector2.png"
          alt="image2"
          width="90%"
          height="550px"
          className="img"
        ></img>
      </div>
      <div>
        <img
          src="img/sector3.png"
          alt="image2"
          width="90%"
          height="550px"
          className="img"
        ></img>
      </div>
      <div>
        <img
          src="img/sector4.png"
          alt="image2"
          width="90%"
          height="550px"
          className="img"
        ></img>
      </div>
    </Slider>
  );
}

export default Carousel;
