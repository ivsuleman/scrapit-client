import React from "react";

import {Route, Switch, Link} from "react-router-dom";

import {LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar, NavItem} from "react-bootstrap";

import Header from "./components/Header";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Wasteitem from "./containers/Wasteitem";
import Resident from "./containers/Resident";
import Collector from "./containers/Collector";
import Site from "./containers/Site";
import SignInForm from "./containers/SignInForm";
import Signup from "./containers/Signup";

import './assets/styling/App.css';
import API from './components/API'

class App extends React.Component {

  state = {
    username: ''
  }

  signin = username => {
    localStorage.setItem('username', username)
    this.setState({username})
  }

  signout = () => {
    localStorage.removeItem('username')
    this.setState({username: ''})
  }

  componentDidMount() {
    const username = localStorage.getItem('username')
    API.validate()
      .then(data => {
        if (data.error) {
          this.signout()
        } else {
          this.signin(data.username)
          this.props.history.push('/resident')
        }
      })
  }

  render() {
    const {signin, signout} = this
    const {username} = this.state

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
              <LinkContainer to="/site">
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
              <LinkContainer to="/signin">
                <NavItem>Sign In</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Header username={username} signout={signout} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/waste-items/new" exact component={Wasteitem} />
          <Route path="/resident" exact component={routerProps => <Resident username={username} {...routerProps} />} />
          <Route path="/collector" exact component={routerProps => <Collector username={username} {...routerProps} />} />
          <Route path="/site" exact component={routerProps => <Site username={username} {...routerProps} />} />
          <Route path="/signin" exact component={routerProps => <SignInForm signin={signin} {...routerProps} />} />
          <Route path="/signup" exact component={Signup} />

          {/* Finally, catch all unmatched routes */}
          <Route component={NotFound} />

        </Switch>
      </div>
    );
  }
}

export default App;