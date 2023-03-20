import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfGDM from "../img/plasticos/Presentacioìn GDM.pdf";
import Satyendra from "../img/plasticos/SPL BOPP Film Plant Brochure (9)[1].pdf";

const ModPolietileno = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Películas de Polietileno Multicapa.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              La lámina de polietileno multicapa se compone de varias capas de
              polietileno de diferentes espesores y propiedades, lo que le
              brinda una combinación única de resistencia y flexibilidad. Cada
              capa se selecciona cuidadosamente para brindar propiedades
              específicas, como resistencia a la humedad, barrera contra gases y
              protección contra rayos UV.
            </p>
            <p className="d-none d-sm-block">
              El polietileno multicapa es ideal para la fabricación de empaques
              para alimentos, productos farmacéuticos, productos químicos y
              otros productos sensibles. Estos empaques pueden ser
              personalizados para adaptarse a diferentes formas y tamaños de
              productos, y pueden incluir características adicionales, como
              cierre ziploc, bolsillos para insertar etiquetas, entre otras.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/polietileno2.webp").default}
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
                  src={require("../img/plasticos/polietileno4.jpg").default}
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
                  src={require("../img/plasticos/polietileno3.webp").default}
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

export default ModPolietileno;
