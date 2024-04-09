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
              Somos una compañía que representa a proveedores de plasticos y
              estructuras metálicas para el mercado colombiano.
            </p>
            <p>
              Ofrecemos peliculas y sacos plasticos de Polipropileno,
              Polietileno, Strech, termoencogibles y de alta barrera para
              empaques industriales.
            </p>
            <p>
              Suministramos productos metálicos para grandes proyectos, nos han
              hecho promotores del desarrollo industrial, de la infraestructura
              y la construcción del país y la región.
            </p>
            <p>
              Las oficinas de Jisa están localizadas en la ciudad de Medellín
              pero atendemos clientes en todo el país.
            </p>
            <a
              className="btn  btn-lg btn-warning text-white mt-3 custobutton"
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
