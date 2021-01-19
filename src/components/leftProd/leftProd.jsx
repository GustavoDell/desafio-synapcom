import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./estilo.css"

class LeftProd extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            imagem0: [],
            imagem1: [],
        }
    }
    
    componentDidMount(){
        fetch("/api/catalog_system/pub/products/search/?fq=productId:3760")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    imagem0: result[0].items[0].images[0].imageUrl,
                    imagem1: result[0].items[0].images[1].imageUrl,
                });
            }
        )
        
    }
    render(){
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
        const {imagem0, imagem1} = this.state;
        return(
            <div className="content--leftProd">
                <div className="slider-img">
                    <Slider {...settings}>
                        <div>
                            {console.log("produto teste", imagem0)}
                            <img src={imagem0}/>
                        </div>
                        <div>
                            <img src={imagem1}/>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
    
}

export default LeftProd;