import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import advicer from "../../Assets/Projects/adviceapi.png";
import githubApi from "../../Assets/Projects/githubapi.png";
import toDoList from "../../Assets/Projects/todolist.png";
import condoguest from "../../Assets/Projects/condoguest.png";
import jordan from "../../Assets/Projects/Jordan.png";
import fylo from "../../Assets/Projects/fylo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus principais <strong className="purple">projetos </strong>
        </h1>
        <p style={{ color: "white" }}>Aqui estão os meus melhores projetos</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={condoguest}
              isBlog={false}
              title="Condoguest"
              description="Um projeto fullstack que conta com um servidor e autenticação de login. O propósito dele é: Diminuir a lentidão dos acessos dos visitantes ao condomínio, gerando um QR Code dentro do site que poderia ser lido pela portaria com todos os dados necessários para a sua entrada"
              ghLink="https://github.com/DarlanSantosCarvalho/Condoguest"
              demoLink="https://condoguest.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={advicer}
              isBlog={false}
              title="Advice API"
              description="Um site que consome a API de conselho e os gera aleatoriamente"
              ghLink="https://github.com/DarlanSantosCarvalho/API-Conselhos"
              demoLink="http://api-conselhos.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDoList}
              isBlog={false}
              title="To Do List"
              description="Uma lista de tarefas utilizando ReactJS/NextJS com utilização de Mobx para gerenciamento de estado"
              ghLink="https://github.com/DarlanSantosCarvalho/toDoList"
              demoLink="https://listadetarefas-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubApi}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Uma página web que consome a API do github e que você pode procurar pelo perfil que deseja, assim, obtendo informações sobre."
              ghLink="https://github.com/DarlanSantosCarvalho/ConsumindoAPI-Github"
              demoLink="https://consumindo-api-github.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jordan}
              isBlog={false}
              title="E-commerce Jordan"
              description="Uma landing page de um e-commerce dinâmico e responsivo, que utiliza toggles para alternar entre alguns tênis da linha Jordan"
              ghLink="https://github.com/DarlanSantosCarvalho/Desafio_2"
              demoLink="https://darlansantoscarvalho.github.io/Desafio_2/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fylo}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Uma landing page dinâmica e responsiva. Desafio do site FrontEnd Mentor"
              ghLink="https://github.com/DarlanSantosCarvalho/Fylo-landing-page"
              demoLink="https://darlansantoscarvalho.github.io/Fylo-landing-page/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
