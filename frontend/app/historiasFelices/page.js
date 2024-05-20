"use client";
import React from "react";
import "./historiasFelices.css";
import Image from "next/image";
import Card from "react-bootstrap/Card";

export default function HistoriasFelices() {
  return (
    <main>
      <section className="seccion1">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="mb-4">Historias Felices</h2>
            </div>
          </div>
          {/* Aquí agregamos el video */}
          <div className="row mt-5">
            <div className="col-md-12">
              <video controls width="100%" height="auto">
                <source src="/videoHistorias.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-8 offset-md-2 text-center">
              <p style={{ fontSize: "1.2rem" }}>
                Lola fue rescatada por AdoptaFur en un estado de abandono
                extremo. Después de meses de cuidados y rehabilitación,
                finalmente encontró su hogar perfecto con Cristina. Lola, una
                perrita de 7 años, y Cristina se encontraron en un evento de
                adopción y fue amor a primera vista. Desde entonces, han sido
                inseparables. Cristina describe a Lola como su mejor amiga y
                compañera fiel. Juntas disfrutan de largos paseos por el parque
                y tardes de siesta acurrucadas en el sofá. Su historia es un
                testimonio del poder transformador de la adopción y el amor
                incondicional entre un animal y su humano.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
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
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="mb-4">Otras Historias Felices</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <Card
                className="historias-felices-card"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  src="/neoHistorias.jpeg"
                  alt="Perro 1"
                />
                <Card.Body>
                  <Card.Title>Neo</Card.Title>
                  <Card.Text>
                    Neo fue adoptado por Laura y su familia. Ahora disfrutan de
                    momentos de juego en casa con otros animales de Laura.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                className="historias-felices-card"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src="/zoeHistorias.jpeg" alt="Gato 1" />
                <Card.Body>
                  <Card.Title>Zoe</Card.Title>
                  <Card.Text>
                    Zoe encontró su hogar con Raquel, quien la mima y la cuida
                    como si fuera su hija.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                className="historias-felices-card"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  src="/cocoHistorias.jpeg"
                  alt="Perro 2"
                />
                <Card.Body>
                  <Card.Title>Coco</Card.Title>
                  <Card.Text>
                    Coco fue rescatada por Ana y ahora es la compañera fiel que
                    siempre quiso tener.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                className="historias-felices-card"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  src="/hachikoHistorias.jpeg"
                  alt="Gato 2"
                />
                <Card.Body>
                  <Card.Title>Hachiko</Card.Title>
                  <Card.Text>
                    Hachiko vive ahora con Pablo y su familia, quienes le adoran
                    y le cuidan con todo su amor.
                  </Card.Text>
                </Card.Body>
              </Card>
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
