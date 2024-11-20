import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  DropdownToggle,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import NucampLogo from "../app/assets/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
              <NavLink className="nav-link me-3 text-dark" to="/">
                Home Page
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/players">
                Player Stats
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/teams">
                Team Rankings
              </NavLink>
            </NavItem>
            <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle
                  className="nav-link text-dark bg-transparent border-0"
                  caret
                >
                  More Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink to="/option1" className="dropdown-item">
                      Option 1
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/option2" className="dropdown-item">
                      Option 2
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/option3" className="dropdown-item">
                      Option 3
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>
        </div>

        {/* Toggler for mobile view */}
        <NavbarToggler color="secondary" onClick={() => setMenuOpen(!menuOpen)} />

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
