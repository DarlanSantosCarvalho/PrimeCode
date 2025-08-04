import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Gestão de condomínios",
          "Vendas E-commerce",
          "ERP e Gestão Empresarial",
          "Finanças"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 120,
      }}
    />
  );
}

export default Type;
