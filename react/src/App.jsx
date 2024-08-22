import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./Header";
import Home from "./Home";
import Loading from "./Loading"
import Signup from "./Signup";
import Login from "./Login";
import NotFound from "./NotFound";


export default class APP extends Component {
  state = {
    saleProducts: [],
    categories: [],
    exploreProducts: [],
    bestSellingProducts: [],
    homeDataReady: false,
    currentPage: "Home",
  }
  getCategories = async ()=> {
    const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list?lang=en&country=us';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8108605de9msh377481ab908d7b7p14c71ajsn9e78f6c9cd0b',
        'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  getProducts = async ()=> {
    const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8108605de9msh377481ab908d7b7p14c71ajsn9e78f6c9cd0b',
        'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.results;
    } catch (error) {
      console.error(error);
    }
  }

  managePages = () => {
    switch (this.state.currentPage) {
      case "Home":
        return (
          this.state.homeDataReady == true ? <Home categories={this.state.categories} exploreProducts={this.state.exploreProducts} saleProducts={this.state.saleProducts} bestSellingProducts={this.state.bestSellingProducts} updatecurrentPage={this.updateState}/> : <Loading/>
        );
      case "Signup":
        return <Signup updatecurrentPage={this.updateState}/>;
      case "Login":
        return <Login updatecurrentPage={this.updateState}/>;
      default:
        return <NotFound/>;
    }
  }
  componentDidMount = async() => {
    let categories = [...this.state.categories];
    let exploreProducts = [...this.state.exploreProducts];
    categories = await this.getCategories();
    exploreProducts = await this.getProducts();
    // console.log(categories)
    // console.log(exploreProducts)
    this.setState({categories});
    this.setState({exploreProducts});
    this.setState({saleProducts : exploreProducts});
    this.setState({bestSellingProducts : exploreProducts});
    this.setState({homeDataReady : true});
  }

  updateState = (newState) => {
    let currentPage = this.state.currentPage;
    currentPage = newState;
    this.setState({currentPage});
  }
  render(){
    return (
      <>
        <Header updatecurrentPage={this.updateState} currentPage={this.state.currentPage}/>
        {this.managePages()}
      </>
    )
  }

}