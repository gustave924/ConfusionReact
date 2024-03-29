import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { addComment, fetchDishes, fetchComments, fetchPromos, postComment, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import  { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) =>({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders
})

const mapDispatchToProps = (dispatch) => ({
  addTheComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetForm: () =>{ dispatch(actions.reset("feedback")) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) },
  postComment: (dishId, rating, author, comment) => { dispatch(postComment(dishId, rating, author, comment)) },
  fetchLeaders: () => { dispatch( fetchLeaders() ) },
  postFeedback: (firstName, lastName, contactTel, email, feedback, isFeedbackAvail, contactMean) => {dispatch(postFeedback(firstName, lastName, contactTel, email, feedback, isFeedbackAvail, contactMean))}
})
class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      detailsDish: null,
      selectedDishId: null
    }
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchLeaders();
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
            dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
            promotionLoading = {this.props.promotions.isLoading}
            promotionErrMess = {this.props.promotions.errMess}
            leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
            leaderLoading = {this.props.leaders.isLoading}
            leadersErrMsg = {this.props.leaders.error}
        />
      );
    }

    const DishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentLoading = {this.props.comments.isLoading}
            commentErrMess = {this.props.comments.errMess}
            addComment={this.props.postComment}
          />
      );
    }

    return (
      <div>
        <Header/>
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}/>
                <Route path="/menu/:dishId"  component={DishWithId}/>
                <Route path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetForm} postFeedback= {this.props.postFeedback}/>} />
                <Route path="/aboutus" component={()=> <About leaders={this.props.leaders.leaders}
                                                                errMess={this.props.leaders.error}
                                                                isLoading = {this.props.leaders.isLoading}/>} />
                <Redirect to="/home"/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
