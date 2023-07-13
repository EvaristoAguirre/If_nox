import React from "react";
import DropdownButton from "./DropdownButton";
import './S6_Faqs.css'
import { FAQS } from "../../Textos/FAQS";

const S6_Faqs = () => {
  return (
    <section className="fondo d-flex flex-column align-items-center">
        <div className="title">Preguntas Frecuentes</div>

      {FAQS.map((faq) => (
        <DropdownButton
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      ;
    </section>
  );
};

export { S6_Faqs };
