import React from "react";
import Carousel from "../Carrusel/Carousel";
import "./S5_2_Disenio.css";

const S5_2_Disenio = () => {
  return (
    <section className="fondo text-center py-5">
      <h1 className="title-color mb-5">Diseño de marca</h1>
      <p>
        El diseño de identidad corporativa es fundamental al crear una página
        web. Cada elemento visual, como el logo, colores, tipografías y estilos,
        debe reflejar la esencia de tu marca y potenciar la confianza y
        credibilidad en los clientes potenciales.
      </p>
      <p>
        Al utilizar un diseño coherente en la página web, desde los elementos
        gráficos hasta la estructura y navegación crea una conexión emocional
        con la audiencia, generando mayor retención, engagement y conversiones.
      </p>
      <p className="mb-5">
        No subestimes su poder al crear tu presencia en línea, ya que es clave
        para el éxito en el mundo digital.
      </p>
      <div className="my-5">
        <Carousel />
      </div>
      <p className="mt-5">
        Confía en nosotros como tu socio digital y recibirás un servicio de
        calidad, así como un compromiso inquebrantable con tu éxito.
      </p>
      <p>
        Estamos listos para ayudarte a aprovechar al máximo las oportunidades en
        línea y establecer una presencia digital que haga crecer tu negocio.
      </p>
      <p>
        ¡Contáctanos hoy mismo y comencemos a construir tu futuro en línea
        juntos!
      </p>
      <div className="btn button-color rounded-pill mt-5">
        <div className="button-text fw-bold">Contactanos</div>
      </div>
    </section>
  );
};

export { S5_2_Disenio };
