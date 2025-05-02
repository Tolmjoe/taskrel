import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarsSlider = ({ images }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (i) => (
            <div className="number-button">{String(i + 1).padStart(2, '0')}</div>
        ),
        dotsClass: "slick-dots custom-number-dots",
    };

    return (
        <div className="car-section">
            <h2 className="car-title">
                <p className="title1">CHOOSE YOUR OAKRIGS VEHICLE</p>
                <h1 className="title2">OAKRIGS VEHICLE</h1>
            </h2>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx} className="car-slide">
                            <img src={img} alt={`${idx}`} className="car-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CarsSlider;
