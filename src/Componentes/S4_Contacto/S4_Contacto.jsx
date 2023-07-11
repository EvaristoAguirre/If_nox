import React from "react";
import "./S4_Contacto.css";

const S4_Contacto = () => {
  return (
    <section className="background">
      <h1 className="fw-bold contact-title text-center ">Dejanos asesorarte</h1>
      <div className="d-flex justify-content-center mt-4">
        <div className="text-center col-7">
          <div className="mb-3">
            <input
              type="text"
              className="form-control input-background rounded-pill"
              id="nombre"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control input-background rounded-pill"
              id="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control input-background rounded-pill"
              id="telefono"
              placeholder="Teléfono"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control input-background rounded-5"
              id="mensaje"
              rows="7"
              placeholder="Contános brevemente que necesitas"
            ></textarea>
          </div>
          <div className="btn bg-gradient rounded-pill contact-button fs-5">
            <div className="button-text fw-bold">Contactanos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { S4_Contacto };
