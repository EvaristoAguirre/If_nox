import React from "react";
import "./S1_ProyDest.css";
import Carousel from "../Carrusel/Carousel";

const S1_ProyDest = () => {
  return (
    <section className="fondo text-center">
      <h1 className="title-color mb-5">Proyectos Destacados</h1>
      <Carousel />
      <div className="btn button-color rounded-pill mt-5">
        <div className="button-text fw-bold">Ver más proyectos</div>
      </div>
    </section>
  );
};

export { S1_ProyDest };
