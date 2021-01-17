import React from "react";
import Camiseta1 from "./imgs/camiseta_1.jpg"
import Camiseta2 from "./imgs/camiseta_2.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./estilo.css"

function LeftProd() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        cssEase: 'linear',
        width: 500,
    };
    
    return(
        <div className="content--leftProd">
            <div className="slider-img">
                <Slider {...settings}>
                    <div>
                        <img src={Camiseta1}/>
                    </div>
                    <div>
                        <img src={Camiseta2}/>
                    </div>
                </Slider>
            </div>
        </div>
    );
    
}

export default LeftProd;