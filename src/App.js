import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/MainComponent";

import {DISHES} from "./shared/dishes"
import "./App.css"
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
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
