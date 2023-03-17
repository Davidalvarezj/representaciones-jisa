import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModPuentes = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Puentes Peatonales Metálicos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              Puentes diseñados a la medida para ser utilizado exclusivamente
              para peatones.
            </p>
            <p>
              Se construyen sobre carreteras o vías férreas para permitir a los
              peatones cruzar de un lado a otro sin tener que preocuparse por el
              tráfico vehicular. fabricados en material acero al carbono, pueden
              ser de tipo colgante o estructura rígida y se sostienen sobre
              pilares. Los puentes peatonales metálicos son más ligeros y más
              rapidos de construir que otros tipos de puentes.
            </p>

            <p className="fw-bold fst-italic">
              Contáctanos para más informacion!
            </p>
          </div>
          <div className="row ">
            <div className="col-6 col-md-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/puentes_2.jpg").default}
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
                  src={require("../img/puente2.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal "
                />
              </div>
            </div>
            <div className="col-6 col-md-4 d-none d-sm-block">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/puente3.jpg").default}
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

export default ModPuentes;
