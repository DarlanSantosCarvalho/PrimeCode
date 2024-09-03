import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Deixe com que eu me<span className="purple"> introduza</span>
            </h1>
            <p className="home-about-body">
              Minha paixão pela programação veio desde cedo, quando criança,
              sempre questionava como os jogos ou sites que eu mais acessava
              eram feitos
              <br />
              <br />
              Hoje eu possuo fluência em
              <i>
                <b className="purple"> HTML, CSS e Javascript e Typescript </b>
              </i>
              <br />
              <br />
              Possuo experiência com &nbsp;
              <i>
                <b className="purple">Desenvolvimento Full-Stack </b>
              </i>
              <br />
              <br />
              Possuo projetos em que utilizo{" "}
              <b className="purple">Node.js, Express, ReactJS e NextJS</b>{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me adiciona lá?!</h1>
            <p>
              Sinta-se à vontade para{" "}
              <span className="purple">se conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DarlanSantosCarvalho"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/darlan-santos-de-carvalho-0231771a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/darlan379/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
