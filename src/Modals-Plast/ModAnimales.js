import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pdf from "../img/plasticos/plazom.pdf";

const ModAnimales = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sacos para concentrado de Animales
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              Estar fabricado con diferentes tipos de plásticos, polietileno,
              polipropileno, PET (tereftalato de polietileno) y poliamida,
              dependiendo del tipo de concentrado y las condiciones de
              almacenamiento y transporte. Estos materiales plásticos son
              resistentes, duraderos y proporcionan una barrera efectiva contra
              la humedad, la luz y otros factores que pueden afectar la calidad
              del concentrado.
            </p>
            <p className="d-none d-sm-block">
              Los sacos para concentrado de animales pueden ser de diferentes
              tamaños y formas. Además, pueden incluir características
              adicionales como cierres herméticos, asas de transporte, etiquetas
              con información sobre el producto, fecha de elaboración y
              caducidad, entre otras.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/Animales2.jpg").default}
                  width="300"
                  height="200"
                  className="alcmodal"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h6 className="text-center"></h6>
            </div>
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/Animales3.jpg").default}
                  width="300"
                  height="200"
                  className="alcmodal"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h6 className="text-center"></h6>
            </div>
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/Animales4.webp").default}
                  width="300"
                  height="200"
                  className="alcmodal"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h6 className="text-center"></h6>
            </div>
            <div>
              <a href={Pdf} target="_blank">
                Catalogo Plaszom .pdf
              </a>
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

export default ModAnimales;
