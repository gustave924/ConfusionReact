import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
 
import { addComment } from '../redux/ActionCreators';
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

const mapStateToProps = (state) =>({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders
})

const mapDispatchToProps = (dispacth) => ({
  addComment: (dishId, rating, author, comment) => dispacth(addComment(dishId, rating, author, comment))
})
class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
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
            dish = {this.props.dishes.filter((dish)=>dish.featured)[0]}
            promotion = {this.props.promotions.filter((promotion)=>promotion.featured)[0]}
            leader = {this.props.leaders.filter((leader)=>leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.props.dishes.filter(dish => dish.id == parseInt(match.params.dishId))[0]}
          comments= {this.props.comments.filter(comment => comment.dishId == parseInt(match.params.dishId))}
          addComment={this.props.addComment}/>
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}/>
          <Route path="/menu/:dishId"  component={DishWithId}/>
          <Route path="/contactus" component={Contact}/>
          <Route path="/aboutus" component={()=> <About leaders={this.props.leaders}/>} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
