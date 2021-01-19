import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./estilo.css"

const produtos = [3808, 3747, 3950, 3830, 1948017390];

class PrateleiraProd extends Component{
    constructor(props){
        super(props);
        this.produto = [];
        this.state = {
        
        }
      }
     
      async requisicaoApi(numero){
            const response = await fetch("/api/catalog_system/pub/products/search/?fq=productId:" + produtos[numero])
            const data = await response.json();
            console.log("data:", data[0].items[0].images[0].imageUrl)
            this.produto.push(data);
            this.setState({
                produto: this.produto
            }) 
        }
        

      componentDidMount(){
        for(var cont = 0; cont <= produtos.length-1; cont++){
            this.requisicaoApi(cont)
        }
    }
    
        render(){
       
        const {produto} = this.produto;
        var settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive:[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                }
            ]
        };

        return(
            <section className="content--carouselColection">
                <div className="content">
                    <h3>Você pode gostar</h3>
                    <div className="slider-img">
                        <Slider {...settings}>
                                {this.produto.map(itens => (
                                    <li className="slick-product">
                                        <div className="box-item">
                                            {console.log("teste", itens)}
                                            <a className="product-image" href={itens.[0].items.[0].images.[0].imageUrl} tabindex="-1">
                                                <img src={itens.[0].items.[0].images.[0].imageUrl}></img>
                                                <span className="imgHover"></span>
                                            </a>
                                            <h3 className="product-name">
                                                <a title={itens.[0].productName} href={itens.[0].link}>
                                                    {itens.[0].productName}
                                                </a>
                                            </h3>
                                            <div className="box-available">
                                                <div className="price">
                                                <a title={itens.[0].productName} href={itens.[0].link}>
                                                   <div className="prices">
                                                       <span className="best-price">
                                                            <strong>R$ {itens.[0].items.[0].sellers.[0].commertialOffer.Price.toString().replace(".",",")}</strong>
                                                       </span>
                                                   </div>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default PrateleiraProd;