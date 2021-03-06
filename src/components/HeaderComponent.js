import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"></img></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav isOpen={this.state.isNavOpen} >
                                <NavItem>
                                    <NavLink className="whitec nav-link" to="/home"><span className="fa fa-home">Home</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="whitec nav-link" to="/aboutus"><span className="fa fa-info">About Us</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="whitec nav-link" to="/menu"><span className="fa fa-list">Menu</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="whitec nav-link" to="/contactus"><span className="fa fa-address-card">Contact Us</span></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>THis is the best restraunt, We take inspitation from the world;s best cusines, and create a unique fusion experience. Our lipsmacking creations will make you crave for the best items in our menu </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;