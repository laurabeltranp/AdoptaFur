import React from "react";
import "./contacto.css";

export default function Contacto() {
  return (
    <main>
      <section className="py-5">
        <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="mb-4">Contacto</h2>
            </div>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="info">
                <h2 className="centered-text">¿Quiénes somos?</h2>
                <p>
                  Somos una organización dedicada a la búsqueda de personas que
                  estén interesadas en adoptar animales desamparados y a
                  conectarlas con protectoras que ofrezcan esos animales.{" "}
                </p>
              </div>
              <h2 className="centered-text">¿Dónde encontrarnos?</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7221.050374385271!2d-3.810756630200114!3d40.451417487498176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229053a97108d%3A0x1e7f6031754f0ce!2sGrupo%20Proeduca!5e0!3m2!1ses!2ses!4v1715857430351!5m2!1ses!2ses"
                width="600"
                height="324"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="form-box">
                <div className="text-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="icono"
                    style={{ width: "38px" }}
                  >
                    <path
                      fill="#000000"
                      d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"
                    />
                  </svg>
                </div>
                <h2 className="centered-text mb-4">
                  ¿Quieres contactar con nosotros?
                </h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="centered-text">
                    <button type="submit" className="btn btn-primary mt-4">
                      Enviar mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "rgb(88,213,92)", stopOpacity: "0" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(88,213,92)", stopOpacity: "1" }}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "rgb(255,255,255)", stopOpacity: "0" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(177,215,182)", stopOpacity: "1" }}
            />
          </linearGradient>
        </defs>
        <path
          className="elementor-shape-fill"
          opacity="0.33"
          d="M527,67.3c203.9,88.3,263.1-34,320.3,0c78.8-49.3,144.8-108.7,144.8-108.7V1000H0V451.3 c0,0,62.1-26.1,94.9-29.3c32.8-3.3,62.8,12.3,75.8,22.1c19.5,9.5,80.2,50.4,130.6,54.4c51.5,4.1,244-49.2,263.4-57.5 C945.5,409.5,1000,336,1000,336H0c0,0,9.9,40.9,83.6,48.1C176.9,393.9,211.3,67.3,527,67.3z"
          fill="url(#grad1)"
        ></path>
        <path
          className="elementor-shape-fill"
          opacity="0.66"
          d="M266,67.3c45.5,0,77.2-23.2,129.1-39.1c28.6-8.7,150.3-10.1,254,39.1 s91.7-34.4,149.2,0C884.3,118.3,1000,39.8,1000,39.8V1000H0V963.5c0,0,28.2-18.5,92.1-18.5C189.8,945.9,224.3,67.3,266,67.3z"
          fill="url(#grad2)"
        ></path>
      </svg>
    </main>
  );
}