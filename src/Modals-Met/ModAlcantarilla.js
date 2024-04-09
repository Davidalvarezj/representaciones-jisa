import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModAlcantarilla = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Alcantarillas Metálicas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <h4>Tipos de alcantarillas:</h4>
            <p>
              Las alcantarillas metálicas corrugadas galvanizadas son utilizadas
              en sistemas de drenaje para desviar el agua de lluvia o de otras
              fuentes hacia canales o cuerpos de agua. Están fabricadas a partir
              de láminas de metal corrugado, que se curvan y galvanizan para que
              al unirlas por pernos en el sitio de obra formen la alcantarilla.
              Son muy resistentes y duraderas, adecuadas para su uso en áreas
              con altos niveles de tráfico o con condiciones climáticas
              extremas.
            </p>
            <p className="fw-bold fst-italic">
              Contáctanos para más informacion!
            </p>
          </div>
          <div className="row ">
            <div className="col-6 col-md-3 ">
              <div className="d-flex justify-content-center">
                <img
                  src={
                    require("../img/alcantarillas-metalicas-circ.jpg").default
                  }
                  width="200"
                  height="200"
                  align="left"
                  className="alcmodal"
                />
              </div>
              <h6 className="text-center">Alcantarillas Circulares</h6>
            </div>
            <div className="col-6 col-md-3 ">
              <div className="d-flex justify-content-center">
                <img
                  src={
                    require("../img/alcantarillas-metalicas-abovedadas2.jpg")
                      .default
                  }
                  width="200"
                  height="200"
                  className="alcmodal "
                />
              </div>
              <h6 className="text-center">Alcantarillas abovedadas</h6>
            </div>
            <div className="col-6 col-md-3 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/alcantarilla-arco.jpg").default}
                  width="200"
                  height="200"
                  className="alcmodal"
                />
              </div>
              <h6 className="text-center">Alcantarillas Arcos</h6>
            </div>
            <div className="col-6 col-md-3 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/Super-Span.jpeg").default}
                  width="200"
                  height="200"
                  className="alcmodal"
                />
              </div>
              <h6 className="text-center">Alcantarillas Super-spam</h6>
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

export default ModAlcantarilla;
