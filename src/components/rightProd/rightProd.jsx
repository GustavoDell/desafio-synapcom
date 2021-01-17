import React, { Component } from "react";
import "./estilo.css"
import TabTamanho from "../tabTamanho/tabTamanho"
import SimilarProd from "../similarProd/similarProd"

class LeftProd extends Component {
    render(){
        return(
            <div className="content--rightProd">
                <div className="content--product">
                    <div className="content--bread-crumb">
                        <div className="bread-crumb">
                            <ul>
                                <li>
                                    <a>Hummel</a>
                                </li>
                                <li>
                                    <a>Roupas</a>
                                </li>
                                <li>
                                    <a>Camisetas</a>
                                </li>   
                            </ul>
                        </div>
                    </div>
                    <div className="content--infos-product">
                        <div className="content--name-product">
                            <h2 className="productName">Camiseta Hummel Brick Infantil - 6</h2>
                        </div>
                        <div className="content--sku-reference">
                            <div className="skuReference">BR000081-M_6</div>
                        </div>
                        <div className="plugin-preco">
                            <div className="descricao-preco">
                                <div className="price">R$ 64,90</div>
                                <div className="best-price">R$ 29,90</div>
                            </div>
                        </div>
                        <div className="content--variation-prod">
                            <ul className="ul--tamanho">
                                <li className="li--tamanho">
                                    Tamanho
                                </li>
                                <li>
                                    <TabTamanho/>
                                </li>
                            </ul> 
                        </div>
                        <SimilarProd/>
                        <div className="content--buy-prod">
                          <a target="_top" className="buy-button-ref"></a>  
                        </div>
                        <div class="content--short-description-prod">
                            <h3>Descrição</h3>
                            <div className="productDescription">
                                A camiseta infantil Brick, tem modelagem adequada para as crianças um visual despojado e o icônico logo da hummel na parte frontal. É uma camiseta causal, super confortável e com um design clássico.... 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };  
}

export default LeftProd;