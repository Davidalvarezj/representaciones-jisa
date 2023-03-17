import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModTablestac = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tablestacas Metálicas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              Las tablestacas de acero se emplean comúnmente para evitar las
              riberas de los ríos o lagos o para contener los suelos en zanjas,
              etc.
            </p>
            <p>Las tablestacas metálicas ofrecen las siguientes ventajas:</p>
            <ul className="ms-5">
              <li>Existen perfiles para diversas condiciones de servicio.</li>
              <li>Por su tamaño y peso son de fácil manipuleo..</li>
              <li>La hincadura es fácil y rápida.</li>
              <li>Pueden recuperarse fácilmente y emplearse nuevamente.</li>
              <li> Son fáciles de transportar y almacenar.</li>
            </ul>

            <p className="fw-bold fst-italic">
              Contáctanos para más informacion!
            </p>
          </div>
          <div className="row ">
            <div className="col-6 col-md-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/tablestacas3.jpg").default}
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
                  src={require("../img/tablestacas1.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal "
                />
              </div>
            </div>
            <div className="col-6 col-md-4 d-none d-sm-block">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/tablestacas2.jpg").default}
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

export default ModTablestac;
