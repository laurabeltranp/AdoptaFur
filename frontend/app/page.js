'use client'
import CustomCarrusel from "@/components/carousel/carousel";
import "./page.module.css";
import Image from "next/image";

export default function Home() {

  return (
    <main>
      <section className="seccion1 ">
        <div className="col-md-12">
          <h2 className="centered-text seccion1">Compañeros para adoptar.</h2>
        </div>
        <div className="container tarjetas-containerseccion1">
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="card h-100 tarjeta-background">
                <Image
                  src="/perrodestacado1.jpeg"
                  width={300}
                  height={242}
                  alt="Compañero disponible"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title nombre-animal"><a href="descripcion_perro.html" style={{ 'textDecoration': 'none' }}>Laika</a></h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 tarjeta-background">
                <Image
                  src="/perrodestacado1.jpeg"
                  width={300}
                  height={242}
                  alt="Compañero disponible"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title nombre-animal"><a href="descripcion_gato.html" style={{ 'textDecoration': 'none' }}>Mishifú</a></h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 tarjeta-background">
                <Image
                  src="/perrodestacado1.jpeg"
                  width={300}
                  height={242}
                  alt="Compañero disponible"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title nombre-animal"><a href="descripcion_periquito.html" style={{ 'textDecoration': 'none' }} >Capitán</a></h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 tarjeta-background">
                <Image
                  src="/perrodestacado1.jpeg"
                  width={300}
                  height={242}
                  alt="Compañero disponible"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title nombre-animal"><a href="descripcion_cobaya.html" style={{ 'textDecoration': 'none' }} >Pelona</a></h5>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card h-100 tarjeta-background">
                  <Image
                    src="/perrodestacado1.jpeg"
                    width={300}
                    height={242}
                    alt="Compañero disponible"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title nombre-animal"><a href="descripcion_cobaya.html" style={{ 'textDecoration': 'none' }} >Cheeto</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 tarjeta-background">
                  <Image
                    src="/perrodestacado1.jpeg"
                    width={300}
                    height={242}
                    alt="Compañero disponible"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title nombre-animal"><a href="descripcion_cobaya.html" style={{ 'textDecoration': 'none' }} >Beltrán</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 tarjeta-background">
                  <Image
                    src="/perrodestacado1.jpeg"
                    width={300}
                    height={242}
                    alt="Compañero disponible"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title nombre-animal"><a href="descripcion_cobaya.html" style={{ 'textDecoration': 'none' }} >Buddy</a></h5>
                  </div>
                </div>
              </div><div className="col-md-3">
                <div className="card h-100 tarjeta-background">
                  <Image
                    src="/perrodestacado1.jpeg"
                    width={300}
                    height={242}
                    alt="Compañero disponible"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title nombre-animal"><a href="descripcion_cobaya.html" style={{ 'textDecoration': 'none' }} >Zoe</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <a href="/mascotas" className="btn btn-primary">Busca más compañeros</a>
          </div>
        </div>
      </section>

      <section className="seccion2 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ 'stopColor': 'rgb(88,213,92)', 'stopOpacity': '0' }} />
              <stop offset="100%" style={{ 'stopColor': 'rgb(88,213,92)', 'stopOpacity': '1' }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ 'stopColor': ' rgb(255,255,255)', 'stopOpacity': '0' }} />
              <stop offset="100%" style={{ 'topColor': 'rgb(177,215,182)', 'stopOpacity': '1' }} />
            </linearGradient>
          </defs>
          <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" fill="url(#grad1)"></path>
          <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" fill="url(#grad2)"></path>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                </svg>
              </div>
              <h3 >Paso 1: Buscar</h3>
              <p>Encuentra el animal que se ajuste a tus preferencias y estilo de vida.</p>
            </div>
            <div className="col-md-4  centered-text">
              <div className="icono-paso">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#000000" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
              </div>
              <h3>Paso 2: Registrarse</h3>
              <p>Conoce al animal en persona y enamórate de él.</p>
            </div>
            <div className="col-md-4  centered-text">
              <div className="icono-paso">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
              </div>
              <h3>Paso 3: Comenzar proceso de adopción</h3>
              <p>Completa el proceso de adopción y dale un hogar a tu nuevo compañero.</p>
              <i className="fas fa-dog"></i>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <a href="/comoAdoptar" className="btn btn-primary btn-lg" tabIndex="-1" role="button">Más información</a>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion3 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" fill="url(#grad1)"></path>
          <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" fill="url(#grad2)"></path>
        </svg>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="centered-text">Animales adoptados</h2>
            </div>
            <CustomCarrusel className="col-md-1 text-center"></CustomCarrusel>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" fill="url(#grad1)"></path>
          <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" fill="url(#grad2)"></path>
        </svg>
      <section className="seccion4 mt-5 mb-5">

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="info">
                <h2 className="centered-text">¿Quiénes somos?</h2>
                <p>Somos una organización dedicada a la búsqueda de personas que estén interesadas en adoptar animales desamparados y a conectarlas con protectoras que ofrezcan esos animales. Nuestro objetivo es facilitar el proceso de adopción y promover el cuidado responsable de los animales.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-box">
                <div className="text-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="icono" style={{ 'width': '38px' }}><path fill="#000000" d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" /></svg>
                </div>
                <h2 className="centered-text mb-4">¿Quieres contactar con nosotros?</h2>
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
                    <textarea className="form-control" id="mensaje" rows="5"></textarea>
                  </div>
                  <div className="centered-text">
                    <button type="submit" className="btn btn-primary mt-4">Enviar mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


