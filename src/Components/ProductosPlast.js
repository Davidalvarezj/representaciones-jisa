import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Productos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ModSterch from "../Modals-Plast/ModStrech";
import ModCPP from "../Modals-Plast/ModCPP";
import ModPolietileno from "../Modals-Plast/ModPolietileno";
import ModPolietilenoMDO from "../Modals-Plast/ModPolietilenoMDO";
import ModTermoencogibles from "../Modals-Plast/ModTermoencogibles";
import ModAltaBarrera from "../Modals-Plast/ModAltaBarrera";
import ModLeche from "../Modals-Plast/ModLeche";
import ModSacosPelicula from "../Modals-Plast/ModSacosPelicula";
import ModAnimales from "../Modals-Plast/ModAnimales";

const ProductosMet = () => {
  const [modalShowStrech, setModalShowStrech] = React.useState(false);
  const [modalShowCPP, setModalShowCPP] = React.useState(false);
  const [modalShowPolietileno, setModalShowPolietileno] = React.useState(false);
  const [modalShowPolietilenoMDO, setModalShowPolietilenoMDO] =
    React.useState(false);
  const [modalShowTermoenco, setModalShowTermoenco] = React.useState(false);
  const [modalShowAltaBarrera, setModalShowAltaBarrera] = React.useState(false);
  const [modalShowLeche, setModalShowLeche] = React.useState(false);
  const [modalShowSacoPelicula, setModalShowSacoPelicula] =
    React.useState(false);
  const [modalShowAnimales, setModalShowAnimales] = React.useState(false);

  return (
    <>
      <>
        <ModSterch
          show={modalShowStrech}
          onHide={() => setModalShowStrech(false)}
        />
        <ModCPP show={modalShowCPP} onHide={() => setModalShowCPP(false)} />
        <ModPolietileno
          show={modalShowPolietileno}
          onHide={() => setModalShowPolietileno(false)}
        />
        <ModPolietilenoMDO
          show={modalShowPolietilenoMDO}
          onHide={() => setModalShowPolietilenoMDO(false)}
        />
        <ModTermoencogibles
          show={modalShowTermoenco}
          onHide={() => setModalShowTermoenco(false)}
        />
        <ModAltaBarrera
          show={modalShowAltaBarrera}
          onHide={() => setModalShowAltaBarrera(false)}
        />
        <ModLeche
          show={modalShowLeche}
          onHide={() => setModalShowLeche(false)}
        />
        <ModSacosPelicula
          show={modalShowSacoPelicula}
          onHide={() => setModalShowSacoPelicula(false)}
        />
        <ModAnimales
          show={modalShowAnimales}
          onHide={() => setModalShowAnimales(false)}
        />
      </>

      <div className="container-fluid producto-main">
        <Container className="pt-5  pb-5">
          <div className="row">
            <div className="col-0 col-md-1"></div>
            <div className="col-12 col-md-10">
              <Row xs={2} md={3} className="g-3 rowgrid-custom">
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={require("../img/plasticos/stretch1.png").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Películas Stretch</Card.Title>
                      <Card.Text>
                        Película stretch auto-adherente para embalaje.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowStrech(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={require("../img/plasticos/cpp1.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Películas de Polipropileno</Card.Title>
                      <Card.Text>
                        Película de Polipropileno Cast - CPP con excelentes
                        propiedades mecánicas.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowCPP(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>

                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={require("../img/plasticos/polietileno1.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>
                        Películas de Polietileno Multicapa
                      </Card.Title>
                      <Card.Text>
                        Peliculas multicapa para laminación y fabricación de
                        empaques.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowPolietileno(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={
                        require("../img/plasticos/polietilenoMDO3.jpg").default
                      }
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Películas de Polietileno con MDO</Card.Title>
                      <Card.Text>
                        Para el reemplazo del BOPP y del Polyester en
                        estructuras multicapa
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowPolietilenoMDO(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={
                        require("../img/plasticos/termoencogible4.jpg").default
                      }
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Películas Termoencogibles</Card.Title>
                      <Card.Text>
                        Resinas de polietileno que reducen su tamaño con una
                        fuente de calor.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowTermoenco(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={require("../img/plasticos/altabarrera4.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Películas de Alta Barrera.</Card.Title>
                      <Card.Text>
                        Películas de Alta Barrera para empaques de cárnicos y de
                        lácteos.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowAltaBarrera(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={require("../img/plasticos/leche4.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Película para leche UHT</Card.Title>
                      <Card.Text>
                        Películas multicapas para empaques de leche larga
                        duración.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowLeche(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={
                        require("../img/plasticos/sacovalvulado1.jpg").default
                      }
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Sacos valvulados de Polietileno</Card.Title>
                      <Card.Text>
                        Sacos valvulados en pelicula de polietileno
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowSacoPelicula(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-dark text-white" border="secondary">
                    <Card.Img
                      src={require("../img/plasticos/animales1.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>
                        Sacos para concentrado de Animales
                      </Card.Title>
                      <Card.Text>
                        Sacos para empaque concentrado de animales.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowAnimales(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="col-0 col-md-1"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductosMet;
