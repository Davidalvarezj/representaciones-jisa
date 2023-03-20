import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductosTitle = ({ setProductState, productState }) => {
  return (
    <>
      <div id="productos" className="custom-nav-adjust"></div>
      <div className="container-fluid product-cont-title">
        <Row className=" ">
          <Col className="text-center mt-5 mb-5">
            <h4 className="text-warning mb-2 p-0">PORTAFOLIO</h4>
            <h2 className="m-0 p-0 text-white">PRODUCTOS</h2>
            <span className="text-warning h5 m-0">____________</span>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductosTitle;
