import React from "react";
import Card from "react-bootstrap/Card";

function AboutCardSaaS() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bem-vindo à <span className="purple">PrimeCode</span> — uma plataforma desenvolvida com o objetivo de transformar tarefas complexas em processos simples, intuitivos e eficientes.
            <br />
            <br />
            Nosso sistema surgiu da experiência direta com os desafios enfrentados por empresas que buscavam automatizar seus fluxos, integrar informações e ganhar agilidade no dia a dia.
            <br />
            <br />
            Utilizamos tecnologias modernas como <span className="purple">C#, React, Next.js, Node.js</span> e banco de dados escaláveis para garantir desempenho, segurança e flexibilidade.
            <br />
            <br />
            Acreditamos que a tecnologia deve servir ao usuário — e é por isso que estamos em constante evolução, ouvindo nossos clientes e entregando soluções cada vez melhores.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Soluções simples para problemas complexos — é nisso que acreditamos."
          </p>
          <footer className="blockquote-footer">Equipe PrimeCode</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardSaaS;
