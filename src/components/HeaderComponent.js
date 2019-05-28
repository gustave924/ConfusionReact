import React, { Component } from 'react'
import { Jumbotron, 
  Navbar, 
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Col, Input, Button
} from 'reactstrap'

  import {Link, NavLink} from "react-router-dom"


export default class Header extends Component {

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state= {
      isOpen: false,
      isModalOpen: false,
    };
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModel = ()=>{
    this.setState({
      ...this.state,
      isModalOpen: !this.state.isModalOpen,
    });
  }

  onLogin = (event) =>{
    event.preventDefault();
    this.toggleModel();
        alert("Username: " + this.userName.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav  navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span> Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span> About Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/menu">
                        <span className="fa fa-list fa-lg"></span> Menu
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                          <Button outline onClick={this.toggleModel}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                      </NavItem>
                  </Nav>
                </Collapse>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModel}>
                  <ModalHeader toggle={this.toggleModel}>Login</ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.onLogin}>
                        <FormGroup>
                          <Label htmlFor="username">User Name</Label>
                          <Input type="text" id="username" name="username"
                                  innerRef={(input) => this.userName = input}/>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="password">Password</Label>
                          <Input type="password" id="password" name="password"
                                  innerRef = { (input) => this.password = input } />
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" id="rememberMe" name="rememberMe"
                                    innerRef = { (input) => this.remember = input }/> 
                            Remember Me
                          </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                  </ModalBody>
                </Modal>
            </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                    <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, 
                           and create a unique fusion experience. Our lipsmacking 
                           creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
      </React.Fragment>
    )
  }
}
