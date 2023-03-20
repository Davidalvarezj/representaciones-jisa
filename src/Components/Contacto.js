import React from "react";
import "./Contacto.css";
import { Container, Row, Col } from "reactstrap";

const Contacto = () => {
  return (
    <div className="container-fluid contacto-main" id="contacto">
      <div className="container">
        <div className="row contact-row">
          <div className="col text-lefth text-white offset-1 mt-5 mb-0">
            <h3 className="m-0 p-0 text-white">CONTÁCTENOS</h3>
            <span className="text-warning h4">___________</span>
            <h4 className="text-warning mt-5">
              <i className="fa fa-phone" /> Teléfono
            </h4>
            <p className="mb-3"> (+57) 315 434 35 59</p>

            <h4 className="text-warning m-0">
              <i className="fa fa-envelope-o" /> email
            </h4>
            <p className="mb-3"> jgjalt@gmail.com</p>

            <h4 className="text-warning">
              <i className="fa-solid fa-location-dot" /> Dirección
            </h4>
            <p className="m-0">
              Km 8 vía Llanogrande Haras Santa Lucía Apto 208 Rionegro,
              Antioquia, Colombia
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 d-flex justify-content-center">
            <img
              src={require("../img/Logojisa3 - Copy.png").default}
              alt="Girl in a jacket"
              width="200"
              height="150"
              className=""
              href="#home"
            />
          </div>
        </div>

        <Row>
          <div className="col text-center text-white h5">
            Copyright Representaciones JISA |
            <a
              role="button"
              className="text-white ms-1"
              href="http://www.representacionesjisa.com/"
              target="_blank"
            >
              www.representacionesjisa.com
            </a>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Contacto;
