import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pdf from "../img/plasticos/plazom.pdf";

const ModSacosPelicula = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sacos valvulados de Polietileno
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <h5>Preformas para el Ilenado de productos secos o granel.</h5>
            <p>
              Las bolsas con válvula son una gran opción para el llenado de
              productos en el sector de la construcción tales como: morteros,
              pinturas o artefactos de cemento. También es adecuado para
              aplicaciones como envasado para sal, azúcar o compuestos
              poliméricos.
            </p>
            <p className="d-none d-sm-block">
              Los sacos valvulados son la solución ideal cuando se quiere
              disminuir los tiempos de empaque y minimizar los desperdicios y el
              polvo. Los sacos pueden ser impresos en sus dos caras principales
              y en los costados con un total de hasta 4 colores para promover su
              producto, colocar instrucciones de uso, etc.
            </p>
            <p>
              Características:
              <ul>
                <li>Producido en polietileno de baja densidad</li>
                <li>Soporte para 25kg con alto COF</li>
                <li>Pigmentado blanco o transparente.</li>
              </ul>
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/sacovalvulado2.jpg").default}
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
                  src={require("../img/plasticos/sacovalvulado3.jpg").default}
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
                  src={require("../img/plasticos/sacovalvulado4.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal"
                  style={{ objectFit: "cover", objectPosition: "top" }}
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

export default ModSacosPelicula;
