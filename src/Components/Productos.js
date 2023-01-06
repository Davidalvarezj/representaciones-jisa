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
import ModAlcantarilla from "../Modals/ModAlcantarilla";
import ModDefens from "../Modals/ModDefens";
import ModPisos from "../Modals/ModPisos";
import ModPostes from "../Modals/ModPostes";
import ModPuentes from "../Modals/ModPuentes";
import ModTablestac from "../Modals/ModTablestac";
import ModTunnel from "../Modals/ModTunnel";







const Productos = () => {

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
      <div className="container-fluid product-cont-title">
        <Row className=" ">
          <Col className="text-center mt-4 mb-4">
            <h6 className="text-warning mb-2 p-0">PORTAFOLIO</h6>
            <h3 className="m-0 p-0 text-white" id="productos">
              PRODUCTOS
            </h3>
            <span className="text-warning h5 m-0">_________</span>
          </Col>
        </Row>
      </div>
      <div className="container-fluid producto-main">
        <Container className="pt-5  pb-5">
          <Row className="mb-5 row-product">
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="mb-5"
                onClick={() => setModalShowAlc(true)}
              >
                <Card.Img
                  variant="top"
                  src={alcantarilla}
                  style={{ width: "500" }}
                />
                <Card.Body>
                  <Card.Title>Alcantarillas Metálicas</Card.Title>
                  <Card.Text className="d-none d-sm-block">
                    Alcantarillas circulares, abovedadas, Arcos y Super-Spam.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="mb-5"
                onClick={() => setModalShowTunnel(true)}
              >
                <Card.Img variant="top" src={tunel} />
                <Card.Body>
                  <Card.Title>Tunnel Liner Plates</Card.Title>
                  <Card.Text className="d-none d-sm-block">
                    El sistema Tunnel Liner, para la construcción de túneles en
                    suelos blandos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem" }}
                className=""
                onClick={() => setModalShowTable(true)}
              >
                <Card.Img variant="top" src={tablestac} />
                <Card.Body>
                  <Card.Title>Tablestacas Metálicas</Card.Title>
                  <Card.Text className="d-none d-sm-block">
                    Sistema de tablestacas o muro de tablestacas para la
                    contención flexible de tierras.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="mb-5"
                onClick={() => setModalShowDefens(true)}
              >
                <Card.Img
                  variant="top"
                  src={require("../img/defensa.jpg").default}
                />
                <Card.Body>
                  <Card.Title>Defensas Viales</Card.Title>
                  <Card.Text className="d-none d-sm-block">
                    Las defensas viales Flex-Beam doble onda en forma de “W”.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="mb-5"
                onClick={() => setModalShowPisos(true)}
              >
                <Card.Img
                  variant="top"
                  src={require("../img/Pisometppal.jpg").default}
                />
                <Card.Body>
                  <Card.Title>Pisos Metálicos</Card.Title>
                  <Card.Text className="d-none d-sm-block">
                    Pisos Metálicos perforados, son ligeros y con superficie
                    antideslizante.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="mb-5"
                onClick={() => setModalShowPost(true)}
              >
                <Card.Img
                  variant="top"
                  src={require("../img/poste.jpg").default}
                />
                <Card.Body>
                  <Card.Title>Postes Metálicos</Card.Title>
                  <Card.Text className="d-none d-sm-block">
                    Los postes metálicos se fabrican a partir de bobinas o
                    planchas de acero de diferentes calidades.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="mb-5"
                onClick={() => setModalShowPuent(true)}
              >
                <Card.Img
                  variant="top"
                  src={require("../img/puente_2.jpg").default}
                />
                <Card.Body>
                  <Card.Title>Puentes Peatonales</Card.Title>
                  <Card.Text className="d-none d-sm-block">
                    Puentes Peatonales metalicos estructurales diseñados a
                    medida.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Productos;
