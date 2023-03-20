import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Nosotros.css";
import { Button } from "react-bootstrap";
import img1 from "../img/bg/manos.jpg";

const Nosotros = () => {
  return (
    <div className="container-fluid nosotros-main">
      <Container className="container-nosotros">
        <Row className="mt-5 mb-5">
          <Col xs="12" md="6">
            <div className="d-flex justify-content-center mb-5">
              <img src={img1} alt="Logo" width="400" className="nosotros-img" />
            </div>
          </Col>

          <Col xs="12" md="5">
            <p>
              Somos una compañía que representa a fabricantes de Plásticos del
              exterior para el mercado colombiano.
            </p>
            <p>
              Ofrecemos una amplia variedad de soluciones de empaque que se
              adaptan a las necesidades de nuestros clientes.
            </p>

            <p>
              <p className="fw-bold text-secondary">Nuestros productos:</p>
              <ul className="text-secondary">
                <li>Película de Polietileno</li>
                <li>Película de Strech</li>
                <li>Película de termoencogibles</li>
                <li>Película de alta barrera</li>
                <li>Sacos valvulados </li>
              </ul>
            </p>

            <a className="btn btn-warning  mt-3 custobutton" href="#productos">
              Productos
            </a>
            <a
              className="btn btn-outline-warning  mt-3 custobutton ms-3"
              href="#contacto"
            >
              Contáctanos
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nosotros;
