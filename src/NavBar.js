import react, { Component } from 'react';

class NavBar extends Comment {
    render(){
        return (
            <Navbar color="warning-color" dark expand="lg" sticky = "top">
                <NavbarBrand href="/">
                    <strong>Caleb Quinn</strong>
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
        );
    }
}

export default NavBar;