import React, { Component } from 'react';
import './estilo.css';

class BuyFloat extends Component {
  render() {
    return(
    <section className={this.props.className}>
        <div className="content">
            <div className="content--buySize">
                <div className="sku-selector-container">
                    <ul className="topic Tamanho productid-3760 numopt-5">
                        <li className="specification-buy">Tamanho</li>
                        <li className="select skuList item-dimension-Tamanho">
                            <span>
                                <input type="radio" data-value="6" className="" id="tamanhoBuy_0"/>
                                <label for="tamanhoBuy_0" class="label-tamanho-buy">6</label>

                                <input type="radio" data-value="8" className="input-tamanho" id="tamanhoBuy_1"/>
                                <label for="tamanhoBuy_1" class="label-tamanho-buy">8</label>

                                <input type="radio" data-value="10" className="input-tamanho" id="tamanhoBuy_2"/>
                                <label for="tamanhoBuy_2" class="label-tamanho-buy">10</label>

                                <input type="radio" data-value="12" className="input-tamanho" id="tamanhoBuy_3"/>
                                <label for="tamanhoBuy_3" class="label-tamanho-buy">12</label>
                                
                                <input type="radio" data-value="14" className="input-tamanho" id="tamanhoBuy_3"/>
                                <label for="tamanhoBuy_3" class="label-tamanho-buy">14</label>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content--buyFloat">
                <div className="content--priceFloat">
                    <div className="plugin-preco">
                        <div className="productPrice">
                            <p className="decricao-preco">
                                <em className="valor-por price-best-price">
                                    <strong className="skuBestPrice">R$ 29,90</strong>
                                </em>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content--buy">
                    <a className="buy-button buy-button-ref"></a>
                </div>
            </div>
        </div>
      </section>
     )
   }
}
export default BuyFloat;