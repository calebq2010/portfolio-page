import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Caleb Quinn</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              about me
            </NavItem>
            <NavItem eventKey={2} href="#">
              portfolio
            </NavItem>
            <NavItem eventKey={3} href="#">
              contact me
            </NavItem>
          </Nav>
        </Navbar>

          <h1 className="App-title">Caleb Quinns Portfolio Page In The Works!</h1>
        </header>
      </div>
    );
  }
}

export default App;
