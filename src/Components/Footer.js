import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import "./Footer.css"



const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <div className="col text-center">
            Copyright Representaciones JISA |
            <a
              role="button"
              className="text-white ms-1"
              href="http://http://www.representacionesjisa.com/"
              target="_blank"
            >
              www.representacionesjisa.com
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
