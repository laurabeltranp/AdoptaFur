import React from 'react';
import "./comoAdoptar.css"

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
              <p className="texto">Si te estás planteando adoptar un animal, debes primero pensar en el compromiso que vas a adquirir, en si tu ámbito familiar es el adecuado, en si dispones del tiempo necesario, en el periodo de vacaciones y si puedes dedicar el presupuesto necesario al mantenimiento de las necesidades del animal, imprevistos, etc.</p>
              <p className="texto">Te invitamos a reflexionar sobre los puntos siguientes, antes de que tomes la decisión de adoptar un animal:</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <img src="/IMG/comoAdoptar/perro6.jpg" alt="Perro" className="img-fluid img-circular" />
              <p className="texto">Piensa en que un perro puede vivir entre 12 y 17 años aprox.</p>
            </div>
            <div className="col-md-6">
              <img src="/IMG/comoAdoptar/perroygato.jpg" alt="Animal" className="img-fluid img-circular" />
              <p className="texto">Un animal es un ser vivo con unas necesidades fisiológicas y emocionales, no es un juguete para un niño, los niños no tienen la suficiente responsabilidad para hacerse cargo de los cuidados que requiere un animal, así que no te plantees adoptar un animal como regalo para un niño, porque estarás sentando las bases de un fracaso.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <img src="/IMG/comoAdoptar/cachorros.jpg" alt="Cachorro" className="img-fluid img-circular" />
              <p className="texto">Si lo que quieres adoptar es un cachorro o un animal joven, piensa que durante su proceso de crecimiento probablemente surgirán situaciones difíciles, romperá cosas, ensuciará, llorará si está sólo o por las noches etc., y que esto es un proceso natural que irá remitiendo en base a la maduración del animal y a la educación que seas capaz de proporcionarle, y que en ocasiones es posible que debas acudir a la ayuda y consejo de profesionales cualificados para resolver.</p>
            </div>
            <div className="col-md-6">
              <img src="/IMG/comoAdoptar/perrocasa.jpg" alt="Vivienda" className="img-fluid img-circular" />
              <p className="texto">¿Te has asegurado de que tu vivienda te permite alojar animales? Si vives en alquiler consulta previamente con el propietario y obtén una autorización por escrito si es necesario. Si vives en propiedad ten en cuenta que todo animal en ciertos casos puede causar molestias a los vecinos. El mantenimiento de un animal supone unos gastos que pueden ser muy variables en función de la especie.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="container-fluid preguntas-frecuentes" style={{'padding-top': '50px'}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
            <div className="accordion" id="accordionFAQ">

              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Registro en la web
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body">
                    Ante todo elige con responsabilidad y consciente de que vas a tener un fiel compañero para el resto de su vida. Perro, gato, conejo… y desde su ficha puedes cumplimentar nuestro cuestionario o desde el enlace directo de dicho cuestionario donde puedes poner varias opciones.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Rellenar formulario de solicitud
                  </button>
                </h3>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body">
                    Una vez rellenado, nos lo envías, recibirás un correo informándote de la recepción del mismo y, lo antes posible te informaremos de nuestra decisión, serán un par de días dependiendo de nuestra disponibilidad.

                    Puedes rellenar el formulario aquí.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    En adopción
                  </button>
                </h3>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body">
                    Los animales en adopción que aparecen en nuestra web se encuentran en esa situación en el mismo momento que lo visualizan pero, puede ocurrir que, durante la cumplimentación, recepción, gestión, etc. del cuestionario, algunos sean adoptados y dejen de estar disponibles. Dado que la actividad que desarrollamos es de voluntariado, no podemos conocer, en tiempo real, todas las adopciones del día. Rogamos comprensión al respecto si alguna de sus opciones se viera frustrada.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Visitar
                  </button>
                </h3>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body">
                    Algunas de las protectoras o refugios de nuestra web ofrecen visitas, puedes contactar con ellos en cualquier momento para facilitaros una visita al centro.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    La solicitud
                  </button>
                </h3>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body">
                            La solicitud puede versa cancelada por parte de la protectora o refugio si considera que las condiciones del animal no serán optimas y adecuadas en su nuevo hogar. Así como que el usuario también puede cancelarlo con 5 días de antelación antes de realizar la entrega o recogida del animal a través de la web en el apartado de solicitud  Gestión de solicitud.

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
