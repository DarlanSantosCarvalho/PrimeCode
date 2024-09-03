import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou<span className="purple"> Darlan Carvalho </span>
            de <span className="purple"> Salvador, Bahia, Brasil!</span>
            <br />
            Sou um estudante de Desenvolvimento Back-End na Unopar e Análise e
            formado em Análise e desenvolvimento de sistemas pela Universidade
            Salvador (Unifacs)
            <br />
            Atualmente trabalho como Analista de Qualidade de Software
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Não há nada melhor do que a adversidade. Cada derrota, cada mágoa,
            cada perda, contém sua própria semente, sua própria lição de como
            melhorar seu desempenho na próxima vez."{" "}
          </p>
          <footer className="blockquote-footer">Malcolm X</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
