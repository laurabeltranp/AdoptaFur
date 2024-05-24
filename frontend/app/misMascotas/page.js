"use client";
import React, { useEffect, useState } from "react";
import { Table, Button, Container, Image } from "react-bootstrap";
import MascotaTable from "@/components/mascotaTable/mascotaTable";

export default function MisMascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const obteniendoMisMascotas = async () => {
      try {
        const response = await fetch(
          "http://" + window.location.hostname + ":8081/mascotas/misMascotas",
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
    obteniendoMisMascotas();
  }, []);

  return (
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgb(88,213,92)', stopOpacity: 0 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(88,213,92)', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 0 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(177,215,182)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" fill="url(#grad1)"></path>
          <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" fill="url(#grad2)"></path>
        </svg>
      <div className="content">
        <Container>
          <h1 className="my-4 text-center">Mis Mascotas.</h1>
          <div className="my-4 ">
            <Button href="/misMascotas/altaMascota" variant="primary">
              Alta Mascota
            </Button>
          </div>
          <MascotaTable mascotas={mascotas}></MascotaTable>
        </Container>
      </div>
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
