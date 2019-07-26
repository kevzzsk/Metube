import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Container
} from "reactstrap";

class AppNavbar extends Component {

  



  render() {
    return (
      <div>
        <Navbar expand="sm">
          <button
            type="button"
            className="btn btn-lg"
            onClick={this.props.toggler}
          >
            <i className="fas fa-bars" />
          </button>
          <Container>
            <NavbarBrand href="/">Metube</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
