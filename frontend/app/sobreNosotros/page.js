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
              <p>En la Comunidad de Madrid, AdoptaFur se ha convertido en una  esperanza para los animales necesitados para ofrecerles una mejor vida. Nuestro camino comenzó a mediados de 2024, cuando las fundadoras, amantes de los animales, decidieron unir esfuerzos para salvar animales de perreras y de las calles.</p>
              <p>Comenzamos difundiendo historias de estos animales con la esperanza de encontrar familias amorosas que los adoptaran. Para ello pensamos que una de las mejores ideas,a además del uso de las redes sociales, era que tanto las protectoras como los usuarios de a pie pudiesen gestionar sus solicitudes.</p>
              <p>Estamos adaptando nuestra labor para maximizar nuestro impacto y ayudar a tantos animales como podamos. Nuestros principales objetivos son:</p>
              <ul>
                <li>Difundir a nuestros animales para encontrarles adoptantes y colaborar con otras protectoras para ayudar en la misma tarea.</li>
                <li>Servir de contacto entre protectora y adoptantes.</li>
                <li>Proporcionar una mejor vida para los animales desamparados.</li>
              </ul>
              <p>Actualmente llevamos entregados en adopción a más de 1.000 animales.</p>
              <p>En AdoptaFur, estamos comprometidos con la transparencia y la integridad, por lo que siempre que hay alguna duda, sugerencia o queja, tanto protectoras como adoptantes pueden ponerse en contacto con nosotros.</p>
            </div>
            <div className="col-md-4">
              <Image src="/sobreNosotros.jpg" width={300} height={242} alt="Equipo" className="img-fluid rounded" />
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
              <span className="elementor-icon-list-text">Difundir a nuestros animales para encontrarles adoptantes es una tarea fundamental en nuestra labor. No solo nos limitamos a mostrar sus fotos y descripciones en nuestro sitio web, sino que también utilizamos nuestras redes sociales y eventos locales para promocionar a cada uno de nuestros compañeros peludos. Nos esforzamos por contar sus historias de vida, resaltar sus personalidades y destacar lo que los hace únicos y especiales.</span>
            </li>
            <br></br>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon">
                <i aria-hidden="true" className="fas fa-circle"></i>
              </span>
              <span className="elementor-icon-list-text">Servir de contacto entre protectora y adoptantes es una responsabilidad crucial que asumimos con dedicación y compromiso. Actuamos como un puente entre aquellos que buscan un compañero animal y las organizaciones que tienen animales necesitados de un hogar amoroso.</span>
            </li>
            <br></br>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon">
                <i aria-hidden="true" className="fas fa-circle"></i>
              </span>
              <span className="elementor-icon-list-text">Proporcionar una mejor vida para los animales desamparados es nuestra principal motivación y objetivo en AdoptaFur. Para lograr esto, nos comprometemos a ofrecerles atención integral y cuidado de alta calidad en todas las etapas de su proceso de rescate, rehabilitación y adopción.</span>
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
