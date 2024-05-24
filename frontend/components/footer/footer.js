import React from "react";
import "./footer.css";
import Image from "next/image";
import instagramIcon from '@/public/icons/instagram.svg';
import tiktokIcon from '@/public/icons/tiktok.svg';
import facebookIcon from '@/public/icons/facebook.svg';
import logoAdoptaFondoBlanco from '@/public/logoAdoptaFondoBlanco.png'

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 position-absolute-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <Image
              src={logoAdoptaFondoBlanco}
              priority={true}
              className="logo-small"
              alt="Logo"
            />
            <p className="text-light">Adopta a tu compañero de vida</p>
          </div>
          <div className="col-md-3">

            <ul className="list-unstyled">
              <li>
                <a className="text-light text-decoration-none" href="/cookies">
                  Cookies
                </a>
              </li>
              <li>
                <a className="text-light text-decoration-none" href="/politica">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  className="text-light text-decoration-none"
                  href="/avisoLegal"
                >
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">

            <p>
              <i className="fas fa-envelope me-2"></i>Correo: info@adoptafur.es
            </p>
            <p>
              <i className="fas fa-phone-alt me-2"></i>Teléfono: +34 612345645
            </p>
          </div>
          <div className="col-md-3">

            <ul className="list-unstyled d-flex justify-content-center">
              <li className="me-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Image src={instagramIcon} alt="Instagram" width={28} height={28} />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Image src={tiktokIcon} alt="TikTok" width={28} height={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/?locale=es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Image src={facebookIcon} alt="TikTok" width={28} height={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-light w-auto" />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 AdoptaFur</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
