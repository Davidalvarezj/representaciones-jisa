import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfGDM from "../img/plasticos/Presentacioìn GDM.pdf";
import Satyendra from "../img/plasticos/SPL BOPP Film Plant Brochure (9)[1].pdf";

const ModPolietilenoMDO = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Películas de Polietileno con tecnología MDO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              La tecnología MDO "Orientación Molecular en la Dirección de la
              Máquina" es una técnica de fabricación utilizada para producir
              láminas de polietileno que ofrecen una mayor resistencia y rigidez
              que las láminas de polietileno convencionales. Es ideal para el
              reemplazo del BOPP y del Polyester en estructuras multicapa.
            </p>
            <p className="d-none d-sm-block">
              La lámina de polietileno con tecnología MDO es fácilmente
              reciclable y puede ser utilizada como una opción más eco-amigable
              en comparación con otros materiales de empaque. Con su alta
              resistencia y rigidez, la lámina de polietileno con tecnología MDO
              es una excelente opción para aplicaciones de empaque que requieren
              mayor resistencia y durabilidad.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/polietilenoMDO1.jpg").default}
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
                  src={require("../img/plasticos/polietilenoMDO2.jpg").default}
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
                  src={require("../img/plasticos/polietilenoMDO4.jpg").default}
                  width="300"
                  height="200"
                  className="alcmodal"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h6 className="text-center"></h6>
            </div>
            <div>
              <a href={PdfGDM} target="_blank">
                Catalogo GDM .pdf
              </a>
            </div>
            <div>
              <a href={Satyendra} target="_blank">
                Catalogo Satyendra.pdf
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

export default ModPolietilenoMDO;
