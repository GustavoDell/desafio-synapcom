import React, { Component } from "react";
import './App.css';
import api from "./api";
import LeftProd from "./components/leftProd/leftProd";
import RightProd from "./components/rightProd/rightProd";
import MasterEspecification from "./components/masterEspecification/masterEspecification";
import PrateleiraProd from "./components/prateleiraProd/prateleiraProd";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }
  

  componentDidMount(){
    this.callApi()
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result[0]
          })
        },(error =>{
          this.setState({
            isLoaded: true,
            error
          })
        }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/catalog_system/pub/products/search/?fq=productId:3760');
    const body = await response.json();
    this.setState({produto: body})
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render(){
    const {error, isLoaded, items} = this.state;
    return (
      <section>
        <section className="master product">
          {console.log('PRODUTO', items)}
          <LeftProd/>
          <RightProd/>
        </section>
        <MasterEspecification/>
        <PrateleiraProd/>
      </section>
    );
  }
}

export default App;
