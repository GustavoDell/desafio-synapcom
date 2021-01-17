import React, { Component } from "react";
import "./estilo.css"

class SimilarProd extends Component{
    
    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          imagem0: [],
          imagem1: [],
          imagem2: [],
          link0: [],
        }
      }
      
    
      componentDidMount() {
        fetch("/api/catalog_system/pub/products/crossselling/similars/3760")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                imagem0: result[0].items[0].images[0].imageUrl,
                imagem1: result[1].items[0].images[0].imageUrl,
                imagem2: result[2].items[0].images[0].imageUrl,
              });
            },
            // Nota: É importante lidar com os erros aqui
            // em vez de um bloco catch() para não recebermos
            // exceções de erros dos componentes.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        
        const {error, isLoaded, imagem0, imagem1, imagem2, link0} = this.state;

        return(
            <div className="component--similar-prod">
                <div className="content--boxSimilar">
                    <div className="titleColor">
                        <h3>Cores</h3>
                    </div>
                    <div className="infosSimilar">
                        <div className="boxSimilar">
                            {console.log("link", link0)}
                            <a>
                                <img src={imagem0} />
                            </a>
                        </div>
                        <div className="boxSimilar">
                            <a>
                                <img src={imagem1} />
                            </a>
                        </div>
                        <div className="boxSimilar">
                            <a>
                                <img src={imagem2} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimilarProd;

