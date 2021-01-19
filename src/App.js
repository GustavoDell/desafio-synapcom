import React, { Component } from "react";
import './App.css';
import LeftProd from "./components/leftProd/leftProd";
import RightProd from "./components/rightProd/rightProd";
import MasterEspecification from "./components/masterEspecification/masterEspecification";
import PrateleiraProd from "./components/prateleiraProd/prateleiraProd";
import BuyFloat from "./components/buyFloat/buyFloat"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      className: 'hidden'
    }
  }
  
  handleScroll() { 
    if (document.documentElement.scrollTop > 141) {
       this.setState({
         className: 'show'
       })
       console.log("SCROOL SENDO REALIZADO")
     }else{
      this.setState({
        className: 'hidden'
      })
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

      window.onscroll = () => this.handleScroll()
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
        {console.log("scrooll", document.documentElement.scrollTop)}
        <BuyFloat className={this.state.className}/>
      </section>
    );
  }
}

export default App;
