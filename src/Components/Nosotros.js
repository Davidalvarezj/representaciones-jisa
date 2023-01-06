import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Nosotros.css"
import { Button } from 'react-bootstrap';
import img1 from "../img/bg/15.jpg"

const Nosotros = () => {
  return (
    <div className="container-fluid nosotros-main">
      <Container className="mt-5 pt-5 mb-5 pb-5 ">
        <Row className="mt-5 mb-5">
          {/* <Col xs="12" md="5" className="mb-5">
            <h2 className="text-warning">BIENVENIDOS A</h2>
            <h3 className="mb-3">REPRESENTACIONES JISA</h3>

            <p class="fst-italic text-secondary ">
              "Tu proveedor de Soluciones metalicas de Alta Calidad el mercado
              Colombiano."
            </p>
          </Col> */}
          <Col xs="12" md="7">
            <div className="d-flex justify-content-center mb-5">
              <img src={img1} alt="Logo" width="500" className="nosotros-img" />
            </div>
          </Col>
          <Col md=""></Col>
          <Col xs="12" md="4">
            <p>
              Somos una compañía que representa a proveedores de estructuras
              metálicas para el mercado colombiano.
            </p>
            <p>
              suministrando productos metálicos para grandes proyectos, nos han
              hecho promotores del desarrollo industrial, de la infraestructura
              y la construcción del país y la región.
            </p>
            <p>
              Las oficinas de Jisa están localizadas en la ciudad de Medellín
              pero atendemos clientes en todo el país.
            </p>
            <a
              className="btn btn-warning text-white mt-3 custobutton"
              href="#contacto"
            >
              Contactenos
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nosotros