import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfGDM from "../img/plasticos/presentacion Parnaplast.pdf";

const ModLeche = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Película para leche UHT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              El empaque multicapa para la leche UHT se utiliza para proteger la
              leche y prolongar su vida útil. Este tipo de empaque está
              compuesto por varias capas de diferentes materiales, cada una con
              una función específica para proteger la leche de la luz, el
              oxígeno y la humedad.
            </p>
            <p className="d-none d-sm-block">
              Esta Pelicula posee una capa externa que proporciona resistencia y
              protección contra los impactos; una capa intermedia que actúa como
              barrera contra la luz y el oxígeno; y una capa interna que está en
              contacto directo con la leche y proporciona una barrera contra la
              humedad.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/leche5.jpg").default}
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
                  src={require("../img/plasticos/leche2.webp").default}
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
                  src={require("../img/plasticos/leche3.jpg").default}
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
                Catalogo Parnaplast .pdf
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

export default ModLeche;
