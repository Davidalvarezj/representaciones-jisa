import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModPisos = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Planchas de Acero Para Pisos de Puentes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              Las planchas de acero para pisos de puentes se emplean
              generalmente como soporte estructural o cubierta, y usualmente se
              las recubre con pavimento asfáltico o concreto.
            </p>
            <p>
              Con frecuencia se emplean para reemplazar pisos de madera gastados
              en puentes y también para la construcción de puentes nuevos.
              Pueden ser de acero negro o galvanizado el cual garantiza una
              mayor duración de piso para el lado inferior de las planchas.
            </p>

            <p className="fw-bold fst-italic">
              Contáctanos para más informacion!
            </p>
          </div>
          <div className="row ">
            <div className="col-6 col-md-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/pisomet3.jpg").default}
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
                  src={require("../img/pisomet1.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal "
                />
              </div>
            </div>
            <div className="col-6 col-md-4 d-none d-sm-block">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/pisomet2.jpg").default}
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

export default ModPisos;
