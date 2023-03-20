import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfGDM from "../img/plasticos/presentacion Parnaplast.pdf";

const ModAltaBarrera = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Películas de Alta Barrera.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              Esta lámina está diseñada para proporcionar una barrera protectora
              efectiva contra la humedad, el oxígeno y otros gases que pueden
              dañar los alimentos y reducir su vida útil. Se produce utilizando
              varias capas de polímeros de alta barrera, como el polietileno y
              el EVOH (etileno y alcohol vinílico), que se combinan para crear
              una barrera protectora eficaz.
            </p>
            <p className="d-none d-sm-block">
              La lámina de polietileno de alta barrera es ideal para empaque de
              productos frescos y refrigerados, como carnes, pescados, quesos,
              frutas y verduras, que requieren protección contra la
              contaminación microbiana y la pérdida de humedad.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/altabarrera1.jpg").default}
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
                  src={require("../img/plasticos/altabarrera5.webp").default}
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
                  src={require("../img/plasticos/altabarrera6.jpeg").default}
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

export default ModAltaBarrera;
