import React, { Component } from "react";
import Slider from "react-slick";

export default class TestSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="sliderImg">
        <Slider {...settings}>
          <div >
            <img width={300} height={250} src="./img/1.jpg"></img>
          </div>
          <div>
            <img width={300} height={250} src="./img/2.jpg"></img>
          </div>
          <div>
            <img width={300} height={250} src="./img/3.jpg"></img>
          </div>
          <div>
            <img width={300} height={250} src="./img/4.jpg"></img>
          </div>
          <div>
            <img width={300} height={250} src="./img/5.jpg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}