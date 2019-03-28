import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Redirect, Switch, Route } from 'react-router-dom'

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";

import {DISHES} from "../shared/dishes";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
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
            dish = {this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotion = {this.state.promotions.filter((promotion)=>promotion.featured)[0]}
            leader = {this.state.leaders.filter((leader)=>leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.state.dishes.filter(dish => dish.id == parseInt(match.params.dishId))[0]}
          comments= {this.state.comments.filter(comment => comment.dishId == parseInt(match.params.dishId))}/>
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId"  component={DishWithId}/>
          <Route path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
