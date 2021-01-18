import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./estilo.css"

const produtos = [3808, 3747, 3269, 3808, 1948017390];

class PrateleiraProd extends Component{
    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          result: [],
        }
      }
     
      requisicaoApi(numero){
        
        fetch("/api/catalog_system/pub/products/search/?fq=productId:" + produtos[numero])
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    result: result,
                });
                // console.log("fora", result);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
      }
      componentDidMount() {
        
        for(var cont = 0; cont <= produtos.length-1; cont++){
            console.log("cont", cont)
            console.log("produto", produtos[cont])
            this.requisicaoApi(cont)
        }
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

        const {result} = this.state;

        return(
            <section className="prateleira vitrini">
                <h2>Você Pode Gostar</h2>
                <div className="slider-img">
                    <Slider {...settings}>
                            {this.state.result.map(item => (
                                <li>
                                    <div>
                                        {console.log("item", item.items.[0].images.[0].imageUrl)}
                                        <a href={item.items.[0].images.[0].imageUrl}></a>
                                    </div>
                                </li>
                            ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default PrateleiraProd;