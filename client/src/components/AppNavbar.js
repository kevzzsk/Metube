import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

import Sidebar from "./Sidebar";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm">
          <button
            type="button"
            className="btn btn-dark btn-lg"
            onClick={this.toggle}
          >
            <i className="fas fa-bars" />
          </button>
          <Container className="mw-100">
            <NavbarBrand href="/">Metube</NavbarBrand>
          </Container>
        </Navbar>
        <Sidebar isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default AppNavbar;
