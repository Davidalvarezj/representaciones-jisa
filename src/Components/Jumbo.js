import React from "react";
import Logo from "../img/Logojisa3 - Copy.png";
import { Container, Row, Col } from "react-bootstrap";
import "./Jumbo.css";

const Jumbo = () => {
  return (
    <>
      <div id="home"></div>
      <div className={"jumbotron-fluid jumbo-main pt-5 pb-5"}>
        <Container className="">
          <div className="row row-jumbo">
            <Col xs="12" md="7" className="mb-5 offset-1">
              <h5 className="text-warning mb-3">BIENVENIDOS A</h5>
              <h2 className="m-0">REPRESENTACIONES JISA</h2>
              <span className="text-warning h3">___________</span>
              <div className="row mt-3">
                <div className="col-8 col-md-5">
                  <p className="fst-italic text-white mb-5 fs-5 slogan">
                    "Tu proveedor de materiales de empaques Plásticos de alta
                    calidad para el mercado Colombiano."
                  </p>
                </div>
              </div>
            </Col>
            <div className="col-6 col-md-4 text-center">
              <div className="d-flex justify-content-center mb-2 d-none d-sm-block">
                <img
                  src={Logo}
                  alt="Logo"
                  width="220"
                  height="150"
                  className="jumbo-logo"
                />
              </div>
              <h3 className="m-0"></h3>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Jumbo;
