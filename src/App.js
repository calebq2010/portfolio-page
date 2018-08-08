import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { HashRouter as Router, Route} from 'react-router-dom';
import "./index.css";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

class App extends React.Component {
    

    render() {
        return (
            <Router>
                <div>
                    <Navbar color="warning-color" dark expand="lg" sticky = "top">
                        <NavbarBrand href="/">
                            <strong>Caleb Quinn</strong>
                        </NavbarBrand>
                        <NavbarNav>
                            <NavItem>
                                <NavLink to="/about" className="textLink"><i className="fas fa-user-tie fa-lg"></i>  About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/portfolio" className="textLink"><i class="fas fa-briefcase fa-lg"></i>  Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact" className="textLink"><i class="fas fa-address-book fa-lg"></i>  Contact</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Navbar>

                    <div className="content">
                        <Route path="/about" component={About}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
