import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfGDM from "../img/plasticos/Presentacioìn GDM.pdf";
import Satyendra from "../img/plasticos/SPL BOPP Film Plant Brochure (9)[1].pdf";

const ModCPP = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Película de Polipropileno Cast - CPP
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              El polipropileno cast es un material popularmente utilizado en la
              fabricación de láminas para empaques debido a su alta resistencia,
              durabilidad y excelente capacidad de sellado. La lámina de
              polipropileno cast es delgada y uniforme, lo que la hace ideal
              para aplicaciones en las que se requiere una apariencia clara y
              brillante.
            </p>
            <p className="d-none d-sm-block">
              La lámina de polipropileno cast permite la fabricación de empaques
              personalizados con formas y tamaños específicos. También es
              resistente a la humedad y a la grasa, lo que lo hace ideal para
              empaques de alimentos y productos que necesitan protección contra
              la contaminación y la oxidación.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/cpp5.jpg").default}
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
                  src={require("../img/plasticos/cpp2.jpg").default}
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
                  src={require("../img/plasticos/cpp4.jpg").default}
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
                Catalogo GDM.pdf
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

export default ModCPP;
