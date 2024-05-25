"use client";
import CustomCarrusel from "@/components/carousel/carousel";
import "./page.module.css";
import { useEffect, useState } from "react";
import Herocardgrid from "@/components/heroCardGrid/herocardgrid";
import FormularioContacto from "@/components/formularioContacto/formularioContacto";

export default function Home() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const obteniendoMascotas = async () => {
      try {
        const response = await fetch(
          "http://" + window.location.hostname + ":8081/mascotas/novedades",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setMascotas(data);
        }
      } catch (error) {}
    };
    obteniendoMascotas();
  }, []);

  return (
    <main>
      <section className="seccion1 start-spacing">
        <div className="col-md-12">
          <h2 className="centered-text seccion1">Compañeros para adoptar</h2>
        </div>
        <div className="container tarjetas-containerseccion1">
          <Herocardgrid mascotas={mascotas}></Herocardgrid>

          <div className="col-md-12 text-center">
            <a href="/mascotas" className="btn btn-primary">
              Busca más compañeros
            </a>
          </div>
        </div>
      </section>

      <section className="seccion2 mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(88,213,92)", stopOpacity: 0 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(88,213,92)", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(177,215,182)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            className="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            fill="url(#grad1)"
          ></path>
          <path
            className="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            fill="url(#grad2)"
          ></path>
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="centered-text">¿Cómo adoptar?</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4  centered-text">
              <div className="icono-paso">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#000000"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                </svg>
              </div>
              <h3>Paso 1: Buscar</h3>
              <p>
                Encuentra el animal que se ajuste a tus preferencias y estilo de
                vida.
              </p>
            </div>
            <div className="col-md-4  centered-text">
              <div className="icono-paso">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    fill="#000000"
                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                  />
                </svg>
              </div>
              <h3>Paso 2: Registrarse</h3>
              <p>Conoce al animal en persona y enamórate de él.</p>
            </div>
            <div className="col-md-4  centered-text">
              <div className="icono-paso">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    fill="#000000"
                    d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#000000"
                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                  />
                </svg>
              </div>
              <h3>Paso 3: Comenzar proceso de adopción</h3>
              <p>
                Completa el proceso de adopción y dale un hogar a tu nuevo
                compañero.
              </p>
              <i className="fas fa-dog"></i>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <a
                href="/comoAdoptar"
                className="btn btn-primary btn-lg"
                tabIndex="-1"
                role="button"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion3 mt-5">
        <div className="container pb-5 position-relative">
          </div>
          <div className="row">
            <div className="col-md-12 text-center mt-4">
              <h2 className="centered-text">Animales adoptados</h2>
            <CustomCarrusel className="col-md-1 text-center"></CustomCarrusel>
          </div>
        </div>
      </section>

      <section className="seccion4">
        <div className="svgArriba">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(88,213,92)", stopOpacity: 0 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(88,213,92)", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(177,215,182)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              className="elementor-shape-fill"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
              fill="url(#grad1)"
            ></path>
            <path
              className="elementor-shape-fill"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
              fill="url(#grad2)"
            ></path>
          </svg>
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
              <FormularioContacto />
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none">
        <path
          className="elementor-shape-fill"
          opacity="0.66"
          d="M266,67.3c45.5,0,77.2-23.2,129.1-39.1c28.6-8.7,150.3-10.1,254,39.1 s91.7-34.4,149.2,0C884.3,118.3,1000,39.8,1000,39.8V1000H0V963.5c0,0,28.2-18.5,92.1-18.5C189.8,945.9,224.3,67.3,266,67.3z"
          fill="url(#grad2)">
        </path>
      </svg>
    </main>
  );
}
