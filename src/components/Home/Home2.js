import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import saas from "../../Assets/saas.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Uma solução <span className="purple">inteligente</span> para o seu negócio
            </h1>
            <p className="home-about-body">
              Nosso sistema nasceu com o propósito de **simplificar tarefas repetitivas**, 
              otimizar a rotina de trabalho e oferecer uma plataforma que **cresce junto com você**.
              <br />
              <br />
              Desenvolvido com as tecnologias mais modernas do mercado, como&nbsp;
              <i>
                <b className="purple">React, Next.js, C#, Node.js, PostgreSQL e .NET Framework</b>
              </i>, nosso SaaS é capaz de atender desde pequenos empreendedores até grandes times.
              <br />
              <br />
              Nosso foco é entregar uma experiência intuitiva, ágil e segura — com recursos como&nbsp;
              <i>
                <b className="purple">automação de processos, dashboards em tempo real</b> e integrações via API.
              </i>
              <br />
              <br />
              Estamos em constante evolução para garantir que você tenha sempre o que há de melhor em&nbsp;
              <b className="purple">performance, usabilidade, criatividade e inovação.</b>
            </p>
          </Col>
          <Col mt={4} className="myAvtar">
            <Tilt>
              <img src={saas} className="img-fluid" alt="saas" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3 className="purple">
              Entre em contato e vamos resolver o seu problema!
            </h3>
            <p>
              administrativo@maisconsultconteadm.com.br
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
