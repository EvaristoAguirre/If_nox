import React from "react";
import Carousel from "../Carrusel/Carousel";

const S5_1_Desarrollo = () => {
  return (
    <section className="fondo text-center py-5">
      <h1 className="title-principal">Nuestros servicios</h1>
      <h1 className="title-color mb-5">Desarrollo Web</h1>
      <p>
        Entendemos la importancia de tener una sólida presencia en línea para el
        éxito de tu negocio en la era digital.
      </p>
      <p>
        Trabajaremos en estrecha colaboración contigo para crear una página web
        funcional, atractiva y fácil de navegar, utilizando las últimas
        tecnologías y prácticas de diseño.
      </p>
      <p className="mb-5">
        Ya sea que necesites una tienda en línea, un blog interactivo o una
        página de aterrizaje profesional, estaremos aquí para convertir tu
        visión en realidad.
      </p>
      <div className="mt-5">
        <Carousel />
      </div>
    </section>
  );
};

export { S5_1_Desarrollo };
