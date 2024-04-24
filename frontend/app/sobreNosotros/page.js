import React from 'react';
import "./sobreNosotros.css";
import Image from "next/image";



export default function SobreNosotros() {
  return (
    <main>
      <section className="seccion1">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mb-4">Sobre Nosotros</h2>
              <p>En la Comunidad de Madrid, AdoptaFur se ha convertido en una luz de esperanza para los animales necesitados. Nuestra andadura comenzó a principios de 2008, cuando un grupo de personas decidieron unir esfuerzos para rescatar animales de perreras.</p>
              <p>Al principio, difundíamos sus historias con la esperanza de encontrar familias amorosas que los adoptaran. Con el tiempo, nos dimos cuenta de que necesitábamos hacer más, así que emprendimos un proyecto audaz: convertimos un chalet en un refugio temporal para perros que iban a ser sacrificados.</p>
              <p>A lo largo de los años, hemos adaptado nuestra labor para maximizar nuestro impacto y ayudar a tantos animales como sea posible. Actualmente, nuestros principales objetivos son:</p>
              <ul>
                <li>Difundir a nuestros animales para encontrarles adoptantes y colaborar con otras protectoras para ayudar en la misma tarea.</li>
                <li>Trasladar perros o gatos de perreras de otras ciudades hasta Madrid para ubicarlos en casas de acogida, proporcionándoles una vida digna hasta que sean adoptados.</li>
                <li>Pagar residencias de forma excepcional cuando no podemos encontrar casas de acogida.</li>
              </ul>
              <p>A lo largo de nuestra trayectoria, hemos entregado en adopción a más de 10.000 animales. Esto no habría sido posible sin la ayuda de nuestra comunidad.</p>
              <p>En AdoptaFur, estamos comprometidos con la transparencia y la integridad. Estamos inscritos en el Registro con el CIF: G85366482 y somos una asociación apolítica, apartidista e independiente, sin ánimo de lucro. No recibimos ayuda estatal, autonómica o municipal, por lo que nuestros ingresos provienen de donativos, colaboraciones, socios y padrinos.</p>
              <p>Nuestra causa es la misma que la de todas las protectoras: rescatar animales y ofrecerles un futuro mejor.</p>
            </div>
            <div className="col-md-4">
              <Image src="team.jpg" alt="Equipo" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
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
        <div className="container">
          <h2 className="text-center mb-4">Nuestros Objetivos</h2>
          <ul className="elementor-icon-list-items">
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon">
                <i aria-hidden="true" className="fas fa-circle"></i>
              </span>
              <span className="elementor-icon-list-text">Difundir a nuestros animales para encontrarles adoptantes y al mismo tiempo colaboramos con otras protectoras, como la nuestra, para ayudarlos en la misma tarea.</span>
            </li>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon">
                <i aria-hidden="true" className="fas fa-circle"></i>
              </span>
              <span className="elementor-icon-list-text">Trasladamos perros o gatos de perreras de otras ciudades hasta Madrid para ubicarlos en casas de acogida, cuya imprescindible ayuda nos permite darles una vida digna y acogedora hasta que son finalmente adoptados. Con esto también se consigue dejar espacio en los refugios para otros animales más desfavorecidos que han sido abandonados y/o maltratados.</span>
            </li>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon">
                <i aria-hidden="true" className="fas fa-circle"></i>
              </span>
              <span className="elementor-icon-list-text">De forma excepcional pagamos residencias si no es posible encontrar casa de acogida, aunque lo hacemos como último recurso, debido a los limitados ingresos de la asociación.</span>
            </li>
          </ul>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" style={{ 'stopColor': 'rgb(88,213,92)', 'stopOpacity': '0' }} />
            <stop offset="100%" style={{ 'stopColor': 'rgb(88,213,92)', 'stopOpacity': '1' }} />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': '0' }} />
            <stop offset="100%" style={{ 'stopColor': 'rgb(177,215,182)', 'stopOpacity': '1' }} />
          </linearGradient>
        </defs>
        <path className="elementor-shape-fill" opacity="0.33" d="M527,67.3c203.9,88.3,263.1-34,320.3,0c78.8-49.3,144.8-108.7,144.8-108.7V1000H0V451.3 c0,0,62.1-26.1,94.9-29.3c32.8-3.3,62.8,12.3,75.8,22.1c19.5,9.5,80.2,50.4,130.6,54.4c51.5,4.1,244-49.2,263.4-57.5 C945.5,409.5,1000,336,1000,336H0c0,0,9.9,40.9,83.6,48.1C176.9,393.9,211.3,67.3,527,67.3z" fill="url(#grad1)"></path>
        <path className="elementor-shape-fill" opacity="0.66" d="M266,67.3c45.5,0,77.2-23.2,129.1-39.1c28.6-8.7,150.3-10.1,254,39.1 s91.7-34.4,149.2,0C884.3,118.3,1000,39.8,1000,39.8V1000H0V963.5c0,0,28.2-18.5,92.1-18.5C189.8,945.9,224.3,67.3,266,67.3z" fill="url(#grad2)"></path>
      </svg>
    </main >
  );
}
