import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfGDM from "../img/plasticos/Presentacioìn GDM.pdf";

const ModStrech = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Película Stretch
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              El Stretch Film o rollos para embalaje, es un plástico extensible
              de polietileno lineal de baja densidad estirable que conforman una
              lámina o película. Es uno de los productos de embalaje más
              importantes para asegurar y fijar la carga en un palet.
            </p>
            <p className="d-none d-sm-block">
              El proceso de coextrusión utilizado hace que la adherencia que
              caracteriza al stretch film esté aplicada en una sola capa. Esto
              facilita la manipulación del producto y posibilita que dos estibas
              puedan estar en contacto sin que se adhieran entre sí.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/Stretch2.jpg").default}
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
                  src={require("../img/plasticos/Stretch3.jpg").default}
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
                  src={require("../img/plasticos/Stretch4.jpg").default}
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
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModStrech;
