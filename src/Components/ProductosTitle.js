import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductosTitle = ({ setProductState, productState }) => {
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
                <div onClick={() => setProductState(!productState)}>
                  {productState ? (
                    <span className="h5 fst-italic text-white product-click text-decoration-underline">
                      Plásticos
                    </span>
                  ) : (
                    <span className="h5 fst-italic text-warning product-click text-decoration-underline">
                      Plásticos
                    </span>
                  )}
                </div>
              </Col>
              <Col xs="3" className="text-white ">
                <div onClick={() => setProductState(!productState)}>
                  {productState ? (
                    <span className="h5 fst-italic text-warning product-click text-decoration-underline">
                      Metálicos
                    </span>
                  ) : (
                    <span className="h5 fst-italic text-white product-click text-decoration-underline">
                      Metálicos
                    </span>
                  )}
                </div>
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
