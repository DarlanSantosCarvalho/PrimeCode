import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={12}>
            <p style={{ marginBottom: "5px", fontWeight: "bold" }}>
              Neneu Tecnologia LTDA © {new Date().getFullYear()}
            </p>
            <p>CNPJ: 54.945.818/0001-06</p>
            <p>Contato: (75) 3631-6094</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
