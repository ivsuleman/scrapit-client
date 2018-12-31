import React from 'react';
import {Link} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import Routes from "./Routes";
import {LinkContainer} from "react-router-bootstrap";

import './assets/styling/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">ScrapIt</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <LinkContainer to="/resident">
                <NavItem>Resident</NavItem>
              </LinkContainer>
              <LinkContainer to="/collector">
                <NavItem>Collector</NavItem>
              </LinkContainer>
              <LinkContainer to="/council">
                <NavItem>Site</NavItem>
              </LinkContainer>
              <LinkContainer to="/help">
                <NavItem>Help</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;