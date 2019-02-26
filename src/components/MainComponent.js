import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent"

import {DISHES} from "../shared/dishes"

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
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onDishClick={this.onDishViewClick}/>
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDishId)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
