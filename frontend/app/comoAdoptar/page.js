"use client";
import React from "react";
import "./comoAdoptar.css";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";

export default function comoAdoptar() {
  return (
    <main>
      <section className="seccion5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="centered-text">Antes de Adoptar</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <div className="barra"></div>
            </div>
            <div className="col-md-10">
              <p className="texto text-justify" style={{ lineHeight: "1.6" }}>
                Si estás considerando adoptar un animal, es importante
                reflexionar sobre el compromiso que asumirás. Debes evaluar si
                tu entorno familiar es adecuado, si dispones del tiempo
                necesario, cómo gestionarás el cuidado del animal durante las
                vacaciones y si puedes dedicar el presupuesto necesario para
                cubrir sus necesidades y posibles imprevistos.
              </p>
              <p className="texto text-justify" style={{ lineHeight: "1.6" }}>
                Te invitamos a reflexionar sobre los puntos siguientes, antes de
                que tomes la decisión de adoptar un animal:
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 mt-2 mb-4">
              <Image
                src="/animalesAdoptar.jpg"
                alt="Vida"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Piensa en que un perro puede vivir entre 12 y 17 años
                aproximadamente.
              </p>
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Piensa en que un pájaro puede vivir entre 6 y 8 años
                aproximadamente.
              </p>
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Piensa en que un perro puede vivir entre 12 y 18 años
                aproximadamente.
              </p>
            </div>
            <div className="col-md-6  mb-4">
              <Image
                src="/animalesAdoptarSalud.jpg"
                alt="Animales"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Los animales tienen necesidades fisiológicas y emocionales, no
                deben ser vistos como simples juguetes para niños. Los niños,
                por su naturaleza, no tienen la madurez ni la responsabilidad
                para cuidar adecuadamente a una mascota. Regalar un animal a un
                niño puede ser una carga para ambos. El cuidado de un animal va
                más allá de proporcionar alimento y agua; requiere atención
                constante, ejercicio, visitas veterinarias y comprensión de sus
                necesidades. Adoptar un animal para regalárselo a un niño puede
                resultar en fracasos tanto en el cuidado del animal como en la
                educación del niño. Esto puede llevar a situaciones donde el
                animal no reciba el cuidado necesario o el niño no desarrolle un
                respeto adecuado hacia los seres vivos.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6  mt-2 mb-4">
              <Image
                src="/animalesAdoptarCachorro.png"
                alt="Vida"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Si estás considerando adoptar un cachorro o un animal joven, ten
                en cuenta que durante su crecimiento es probable que enfrentes
                desafíos como romper objetos, ensuciar el espacio, llorar cuando
                está solo o por las noches, entre otros comportamientos típicos.
                Estos son procesos naturales que disminuirán con el tiempo y la
                educación que le brindes. En algunas ocasiones, puede ser
                necesario buscar la ayuda y consejo de profesionales
                cualificados para resolver ciertas situaciones.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <Image
                src="/animalesAdoptarCasa.jpg"
                alt="Vivienda"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                ¿Has verificado si tu residencia es adecuada para albergar
                perros, gatos o aves? Si estás alquilando, es importante
                consultar con el propietario y obtener una autorización por
                escrito si es necesario. Si vives en tu propia propiedad, ten en
                cuenta que cualquier mascota, en algunos casos, puede causar
                incomodidades a los vecinos. Además, recuerda que el
                mantenimiento de una mascota conlleva gastos que pueden variar
                significativamente según la especie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion5 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Preguntas Frecuentes</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Registro en la web</Accordion.Header>
                  <Accordion.Body>
                    Primero, elige con responsabilidad y conscientemente
                    sabiendo que estás a punto de recibir un leal compañero para
                    toda la vida. Ya sea un perro, un gato o un pájaro, desde su
                    perfil podrás completar nuestro cuestionario o acceder
                    directamente a él a través del enlace provisto, donde
                    tendrás la oportunidad de proporcionar varias opciones.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Rellenar formulario de solicitud
                  </Accordion.Header>
                  <Accordion.Body>
                    Una vez rellenado el formualrio nos encargaremos de ponernos
                    en contacto con usted para resolverle las dudas que pueda
                    tener y facilitarle todo lo antes posible, también estamos
                    abiertos a sugerencias a través del mismo formulario. Puedes
                    rellenar el formulario <a href="/">aquí</a>.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>En adopción</Accordion.Header>
                  <Accordion.Body>
                    Los animales que se muestran en nuestro sitio web como
                    disponibles para adopción se encuentran en esa condición al
                    momento de la visualización. Sin embargo, es posible que
                    algunos de ellos sean adoptados mientras se completa el
                    proceso de solicitud, recepción y gestión. Debido a que
                    nuestro trabajo se basa en el voluntariado, no tenemos la
                    capacidad de conocer en tiempo real todas las adopciones que
                    se realizan en el día. Agradecemos su comprensión si alguna
                    de las opciones que considera se vuelve no disponible.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Visitar</Accordion.Header>
                  <Accordion.Body>
                    Algunas de las protectoras o refugios de nuestra web ofrecen
                    visitas, puedes contactar con ellos en cualquier momento
                    para facilitaros una visita al centro.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>La solicitud</Accordion.Header>
                  <Accordion.Body>
                    La solicitud puede verse cancelada por parte de la
                    protectora o refugio si considera que las condiciones del
                    animal no serán óptimas y adecuadas en su nuevo hogar. Así
                    como que el usuario también puede cancelarlo con 15 días de
                    antelación antes de realizar la entrega o recogida del
                    animal a través de la web en el apartado de solicitud
                    Gestión de solicitud.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
