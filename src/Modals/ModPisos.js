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
          Pisos Metálicos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              La rejilla es fabricada bajo Norma Internacional ANSI/NAAMM
              STANDARD MBG 531, donde se perfora la platina portante según
              distancia y tipo de elemento de amarre, se ensambla a presión
              hidráulica los dos elementos, se aplica soldadura al 100% de la
              platina de marco lateral o enmarque, y unos puntos de soldadura
              diagonalmente en la parte anterior del panel, consiguiendo así un
              elemento robusto y rígido, listo para aplicar el acabado final.
            </p>

            <p className="text-tertiary">Contáctanos para más informacion!</p>
          </div>
          <div className="row ">
            <div className="col-6 col-md-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/Pisos1.jpg").default}
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
                  src={require("../img/piso2.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal "
                />
              </div>
            </div>
            <div className="col-6 col-md-4 d-none d-sm-block">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/piso3.jpg").default}
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
