import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfThermo from "../img/plasticos/Termocontraětil - ES (1).pdf";

const ModTermoencogibles = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Películas de Polietileno termoencogible
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              La lámina de polietileno termoencogible se produce utilizando
              polietileno de alta densidad y un aditivo especial que le permite
              encogerse cuando se expone al calor. Se puede utilizar para
              envolver productos individuales o para cubrir grandes paletas de
              productos para su transporte y almacenamiento.
            </p>
            <p className="d-none d-sm-block">
              Ofrece una excelente protección contra la humedad, el polvo y los
              contaminantes, y puede utilizarse en una amplia variedad de
              productos, como alimentos, bebidas, productos electrónicos, entre
              otros. También puede ser impresa con logotipos y diseños
              personalizados para agregar valor de marca a los productos.
            </p>
            <p className="fw-bold fst-italic mt-4">
              Contáctanos para mayor información!
            </p>
          </div>
          <div className="row ">
            <div className="col-4 ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../img/plasticos/termoencogible1.webp").default}
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
                  src={require("../img/plasticos/termoencogible2.jpg").default}
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
                  src={require("../img/plasticos/termoencogible3.jpg").default}
                  width="300"
                  height="200"
                  className="alcmodal"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h6 className="text-center"></h6>
            </div>
            <div>
              <a href={PdfThermo} target="_blank">
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

export default ModTermoencogibles;
