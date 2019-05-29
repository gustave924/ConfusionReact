import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/MainComponent";
import {Provider} from "react-redux";
import {configureStore} from "./redux/ConfigureStore";
import {DISHES} from "./shared/dishes";
import "./App.css";


const store = configureStore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      detailsDish: null,
    }
  }
  
  
  
  render() {
    return (
      <Provider store= {store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
