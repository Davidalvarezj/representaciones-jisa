import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductosTitle = (props) => {
  const functstate1 = (props) => {
    props.setShowPlasticos(true);
    props.setShowMetalicos(false);
  };
  const functstate2 = (props) => {
    props.setShowPlasticos(false);
    props.setShowMetalicos(true);
  };

  return (
    <>
      <div className="container-fluid product-cont-title">
        <Row className=" ">
          <Col className="text-center mt-4 mb-4">
            <h4 className="text-warning mb-2 p-0">PORTAFOLIO</h4>
            <h2 className="m-0 p-0 text-white" id="productos">
              PRODUCTOS
            </h2>
            <span className="text-warning h5 m-0">____________</span>

            <Row className="mt-4">
              <Col xs="3"></Col>
              <Col xs="3">
                {props.ShowPlasticos ? (
                  <span
                    className="h5 fst-italic text-warning product-click text-decoration-underline"
                    onClick={() => {
                      functstate1(props);
                    }}
                  >
                    Plásticos
                  </span>
                ) : (
                  <span
                    className="h5 fst-italic text-white product-click "
                    onClick={() => {
                      functstate1(props);
                    }}
                  >
                    Plásticos
                  </span>
                )}
              </Col>
              <Col xs="3" className="text-white ">
                {props.ShowMetalicos ? (
                  <span
                    className="h5 fst-italic text-warning product-click text-decoration-underline"
                    onClick={() => {
                      functstate2(props);
                    }}
                  >
                    Metálicos
                  </span>
                ) : (
                  <span
                    className="h5 fst-italic text-white product-click "
                    onClick={() => {
                      functstate2(props);
                    }}
                  >
                    Metálicos
                  </span>
                )}
              </Col>
              <Col xs="3"></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductosTitle;
