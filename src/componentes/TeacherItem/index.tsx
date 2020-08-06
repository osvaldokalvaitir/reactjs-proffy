import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/40433049?s=460&u=0e403651fa759d356c02f8bf094c9aecd854a1e6&v=4" alt="Osvaldo Kalvaitir"/>
        <div>
          <strong>Osvaldo Kalvaitir</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Paisis, filhis, espiritis santis. Detraxit consequat et quo num tendi nada.
        <br /><br />
        Viva Forevis aptent taciti sociosqu ad litora torquent. Per aumento de cachacis, eu reclamis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;