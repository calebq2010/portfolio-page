import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isWideEnough: false,
        };

    }

    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="lg" scrolling>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    <NavbarNav>
                          <NavItem active>
                              <NavLink to="#">About Me</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Portfolio</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Contact</NavLink>
                          </NavItem>
                    </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export default App;
