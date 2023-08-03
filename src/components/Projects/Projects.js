import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import advicer from "../../Assets/Projects/adviceapi.png";
import githubApi from "../../Assets/Projects/githubapi.png";
import toDoList from "../../Assets/Projects/todolist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus principais <strong className="purple">projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão os meus melhores projetos
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
              imgPath={advicer}
              isBlog={false}
              title="Advice API"
              description="Um site que consome a API de conselho e os gera aleatoriamente"
              ghLink="https://github.com/DarlanSantosCarvalho/API-Conselhos"
              demoLink="http://api-conselhos.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
