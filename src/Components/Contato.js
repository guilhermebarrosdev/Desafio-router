import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>wingui3@gmail.com</li>
          <li>1999999-9999</li>
          <li>Rua qualquer, 123</li>
        </ul>
      </div>
      <h1>Contato</h1>
    </section>
  );
};

export default Contato;
