import React from "react";
import styles from "./politica.css";

export default function Politica() {
    return (
        <div className={`container ${styles.container}`}> 
        <title>Política de Privacidad - AdoptaFur</title>
  
        <main className={`main ${styles.main}`}> 
          <h1 className={`title ${styles.title}`}>Política de Privacidad</h1> 
          <p className={`description ${styles.description}`}>
            En AdoptaFur, nos comprometemos a proteger tu privacidad en línea. Este documento describe cómo recopilamos, utilizamos y protegemos tu información personal.
          </p>
          <h2>Información que recopilamos</h2>
          <p>
            Recopilamos información personal cuando te registras en nuestro sitio, realizas una compra, te suscribes a nuestro boletín informativo o completas un formulario.
          </p>
          <h2>Cómo utilizamos tu información</h2>
          <p>
            Utilizamos tu información personal para personalizar tu experiencia y para procesar tus transacciones de manera segura.
          </p>
          <h2>Cómo protegemos tu información</h2>
          <p>
            Implementamos una variedad de medidas de seguridad para mantener la seguridad de tu información personal.
          </p>
          <h2>Divulgación a terceros</h2>
          <p>
            No vendemos, intercambiamos ni transferimos a terceros tu información personal.
          </p>
        </main>
      </div>
  );
};