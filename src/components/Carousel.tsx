import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="w-96 h-48 rounded-md p-4 border border-blue-400 ml-5 mr-10 drop-shadow-lg">
                <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                    <p className="font-semibold text-black">Tolu Adewale</p>
                </div>
                <p className="text-black mt-2 leading-8 border-b pb-4">
                    Exceptional dedication to immigrant families' well-being!
                    Their tailored programs truly make a difference in lives
                </p>
            </div>
            <div className="w-96 h-48 rounded-md p-4 border border-blue-400 ml-10 mr-10 drop-shadow-lg">
                <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                    <p className="font-semibold text-black">Tolu Adewale</p>
                </div>
                <p className="text-black mt-2 leading-8 border-b pb-4">
                    Exceptional dedication to immigrant families' well-being!
                    Their tailored programs truly make a difference in lives
                </p>
            </div>
            <div className="w-96 h-48 rounded-md p-4 border border-blue-400 ml-10 mr-10 drop-shadow-lg">
                <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                    <p className="font-semibold text-black">Tolu Adewale</p>
                </div>
                <p className="text-black mt-2 leading-8 border-b pb-4">
                    Exceptional dedication to immigrant families' well-being!
                    Their tailored programs truly make a difference in lives
                </p>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
};

export default Carousel;
