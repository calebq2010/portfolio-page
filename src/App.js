import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { HashRouter as Router } from 'react-router-dom';
import About from "./about";

class App extends React.Component {
    

    render() {
        return (
            <Router>
                <Navbar color="warning-color" dark expand="lg" sticky = "top">
                    <NavbarBrand href="/">
                        <strong>Caleb Quinn</strong>
                    </NavbarBrand>
                    <NavbarNav>
                          <NavItem active>
                              <NavLink to="/about">About Me</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/portfolio">Portfolio</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/contact">Contact</NavLink>
                          </NavItem>
                    </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export default App;
