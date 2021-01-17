import React, { Component } from "react";
import './App.css';
import api from "./api"
import LeftProd from "./components/leftProd/leftProd"
import RightProd from "./components/rightProd/rightProd"

class App extends Component {
  state= {
    produto: [],
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ produto: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/catalog_system/pub/products/search?fq=productId:3831');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  };

  render(){
    return (
      <section className="master product">
        <LeftProd/>
        <RightProd/>
      </section>
    );
  }
}

export default App;
