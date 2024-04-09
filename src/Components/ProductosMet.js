import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Productos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../img/pexels-fauxels-3184292.jpg";
import alcantarilla from "../img/alcantarillas-9.jpg";
import tunel from "../img/tunelliner.jpg";
import tablestac from "../img/tablestaca.jpg";
import defensa from "../img/defensa.jpg";
import ModAlcantarilla from "../Modals-Met/ModAlcantarilla";
import ModDefens from "../Modals-Met/ModDefens";
import ModPisos from "../Modals-Met/ModPisos";
import ModPostes from "../Modals-Met/ModPostes";
import ModPuentes from "../Modals-Met/ModPuentes";
import ModTablestac from "../Modals-Met/ModTablestac";
import ModTunnel from "../Modals-Met/ModTunnel";

const ProductosMet = () => {
  const [modalShowAlc, setModalShowAlc] = React.useState(false);
  const [modalShowTunnel, setModalShowTunnel] = React.useState(false);
  const [modalShowTable, setModalShowTable] = React.useState(false);
  const [modalShowDefens, setModalShowDefens] = React.useState(false);
  const [modalShowPisos, setModalShowPisos] = React.useState(false);
  const [modalShowPost, setModalShowPost] = React.useState(false);
  const [modalShowPuent, setModalShowPuent] = React.useState(false);

  return (
    <>
      <>
        <ModAlcantarilla
          show={modalShowAlc}
          onHide={() => setModalShowAlc(false)}
        />
        <ModDefens
          show={modalShowDefens}
          onHide={() => setModalShowDefens(false)}
        />
        <ModPisos
          show={modalShowPisos}
          onHide={() => setModalShowPisos(false)}
        />
        <ModPostes
          show={modalShowPost}
          onHide={() => setModalShowPost(false)}
        />
        <ModPuentes
          show={modalShowPuent}
          onHide={() => setModalShowPuent(false)}
        />
        <ModTablestac
          show={modalShowTable}
          onHide={() => setModalShowTable(false)}
        />
        <ModTunnel
          show={modalShowTunnel}
          onHide={() => setModalShowTunnel(false)}
        />
      </>

      <div className="container-fluid producto-main">
        <Container className="pt-5  pb-5">
          <div className="row">
            <div className="col-0 col-md-1"></div>
            <div className="col-12 col-md-10">
              <Row xs={2} md={3} className="g-3 rowgrid-custom">
                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={alcantarilla}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Alcantarillas Metálicas</Card.Title>
                      <Card.Text>
                        Alcantarillas circulares, abovedadas, Arcos y
                        Super-Spam.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowAlc(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>

                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={tunel}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>
                        Planchas para Revestimiento de Túneles
                      </Card.Title>
                      <Card.Text>
                        El sistema Tunnel Liner, para la construcción de túneles
                        en suelos blandos.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowTunnel(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>

                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={tablestac}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Tablestacas Metálicas</Card.Title>
                      <Card.Text>
                        Sistema de tablestacas o muro de tablestacas para la
                        contención flexible de tierras.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowTable(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>

                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={require("../img/defensa.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Defensas Viales</Card.Title>
                      <Card.Text>
                        Las defensas viales Flex-Beam doble onda en forma de
                        “W”.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowDefens(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>

                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={require("../img/Pisometppal.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Pisos Metálicos</Card.Title>
                      <Card.Text>
                        Planchas de Acero para pisos de puentes, pueden ser de
                        acero negro o galvanizado.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowPisos(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>

                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={require("../img/poste.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Postes Metálicos</Card.Title>
                      <Card.Text>
                        Los postes metálicos se fabrican a partir de bobinas o
                        planchas de acero de diferentes calidades.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowPost(true)}
                      >
                        Mas Información
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>

                <Col>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={require("../img/puente_2.jpg").default}
                      alt="Card image"
                      className="custom-card-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>Puentes Peatonales</Card.Title>
                      <Card.Text>
                        Puentes Peatonales metalicos estructurales diseñados a
                        medida.
                      </Card.Text>
                      <Button
                        variant="btn btn-outline-warning prod-button"
                        onClick={() => setModalShowPuent(true)}
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
