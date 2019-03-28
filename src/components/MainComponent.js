import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Redirect, Switch, Route } from 'react-router-dom'

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

import {DISHES} from "../shared/dishes";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      detailsDish: null,
      selectedDishId: null
    }
  }
  
  onDishViewClick = (dishId) => {
    this.setState({
        ...this.state,
        selectedDishId : dishId
    });
  }
  
  render() {

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
