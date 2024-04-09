import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModTunnel = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tunnel Liner Plates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              El sistema Tunnel Liner, para la construcción de túneles en suelos
              blandos, consiste en la excavación y ensamblaje interior,
              progresivo y simultáneo de placas de acero negras, galvanizadas,
              con recubrimiento epóxico, con o sin revestimiento interior en
              concreto o como formaleta pérdida según las características de la
              obra.
            </p>
            <p>
              Es una alternativa práctica para reemplazar el método de
              excavación con zanja a cielo abierto, evitando interferencias con
              el tráfico vehicular, peatonal, la industria y el comercio. Los
              túneles requieren menor volumen de excavación y ningún relleno.
              Reduce costos de obra, cuando las excavaciones son profundas.
            </p>
            <p className="fw-bold fst-italic">
              Contáctanos para más informacion!
            </p>
          </div>
          <div className="row ">
            <div className="col-6 col-md-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/tunelliner-1.png").default}
                  width="200"
                  height="200"
                  align="left"
                  className="alcmodal"
                />
              </div>
            </div>
            <div className="col-6 col-md-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/tunelliner2.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal "
                />
              </div>
            </div>
            <div className="col-6 col-md-4 d-none d-sm-block">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/tunelliner3.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModTunnel;
