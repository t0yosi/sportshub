import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import NucampLogo from "../app/assets/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color="white" sticky="top" expand="md">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo and Brand Section */}
        <div className="d-flex align-items-center">
          <NavbarBrand className="d-flex align-items-center" href="/">
            <img src={NucampLogo} alt="nucamp logo" className="me-2" />
          </NavbarBrand>
          <Nav className="d-none d-md-flex">
            <NavItem>
              <NavLink className="nav-link me-3 text-dark" to="/players">
                Home Page
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/teams">
                Player Stats
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/teams">
                Team Rankings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/teams">
                More Options
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        {/* Toggler for mobile view */}
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

        {/* Collapsible Navigation */}
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto align-items-center" navbar>
            {/* Buttons on the far right */}
            <NavItem className="d-flex gap-2">
              <Button className="me-2 btn-light text-dark" outline>
                Join
              </Button>
              <Button className="btn-dark">Sign Up</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
