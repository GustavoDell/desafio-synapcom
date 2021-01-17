import React, { Component } from "react";
import "./estilo.css";

class TabelaTamanho extends Component{
    render(){
        return(
            <div className="div-tamanho">
                <input type="radio" data-value="6" className="input-tamanho" id="tamanho_0"/>
                <label for="tamanho_0" class="label-tamanho">6</label>

                <input type="radio" data-value="8" className="input-tamanho" id="tamanho_1"/>
                <label for="tamanho_1" class="label-tamanho">8</label>

                <input type="radio" data-value="10" className="input-tamanho" id="tamanho_2"/>
                <label for="tamanho_2" class="label-tamanho">10</label>

                <input type="radio" data-value="12" className="input-tamanho" id="tamanho_3"/>
                <label for="tamanho_3" class="label-tamanho">12</label>
                
                <input type="radio" data-value="14" className="input-tamanho" id="tamanho_3"/>
                <label for="tamanho_3" class="label-tamanho">14</label>
            </div>
        );
    };
}

export default TabelaTamanho;