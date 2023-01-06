import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NucampLogo from "../img/icon1.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/Logojisa2.png";
import "./Navmenu.css";



const Navmenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" className="border">
        <Container>
          <Navbar.Brand href="#nosotros">
            <img src={Logo} alt="Logo" width="80" height="60" />
          </Navbar.Brand>
          <Nav className="h4">
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#nosotros">
            <img src={Logo} alt="Logo" width="80" height="60" />
          </Navbar.Brand>
          <Nav className="fs-5 nav-link active">
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <a className="text-decoration-none me-5" href="#nosotros">
              Nosotros
            </a>
            <a className=" text-decoration-none me-5" href="#productos">
              Productos
            </a>
            <a className=" text-decoration-none" href="#contacto">
              Contacto
            </a>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
};
export default Navmenu;
