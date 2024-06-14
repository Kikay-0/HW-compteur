import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './style.css';
import { useState } from 'react';
import GlobalStyle from './style.css';

const GlobalStyle = createGlobalStyle`
body {
    font-family: Open sans;
    font-size: 25px;
    background: #131415;
    color: white
}
 `;

const App = () => {
  const [counter, setCounter] = useState(0);

  // pour l'incrémentation du bouton
  const incr = () => {
    // ajoute +1 du compteur
    setCounter(counter + 1);
  };

  return (
    <>
      <>
        <GlobalStyle />
        <div>
          <h1>Hello World!</h1>
          <p> Texte de présentation </p>
          <button onClick={incr}>Cliquez ICI</button>
          <p>
            {counter == 1
              ? 'Vous avez cliqué sur le bouton pour la première fois'
              : `
            Vous avez cliqué sur le bouton ${counter} fois.`}
          </p>
        </div>
      </>
    </>
  );
};

export default App;
