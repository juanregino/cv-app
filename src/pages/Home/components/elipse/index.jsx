import React, { useEffect, useRef } from 'react'
import "./style.css";

function Elipse () {
  /**
   *? No se usa queryselector para hacer referencia a un elemento html sino useRef
   * const textMaquina = document.querySelector("#maquina_escribir")
   * */
  //*se usa es useRef en React
  const textMaquina = useRef();

  const palabras = ["Bienvenido", "Vas a conocer ","Acerda De", "Juan Pablo"];

  let indiceActual = 0;

  function maquinaEscribir() {
   
    textMaquina.current.innerHTML = "";
    

    let textArray = palabras[indiceActual];

    textArray = textArray.split("");
    let i = 0;

    const pintarString = setInterval(() => {
      textMaquina.current.textContent += textArray[i];
      i++;

      if (i == textArray.length) {
        clearInterval(pintarString);

        setTimeout(() => {
          borrarPalabra();
        }, 1000);
      }
    }, 200);
  }

  function borrarPalabra() {
    let texto = textMaquina.current.textContent;

    const borrarString = setInterval(() => {
      texto = texto.slice(0, -1);
      textMaquina.current.textContent = texto;

      if (texto == "") {
        clearInterval(borrarString);
        indiceActual = (indiceActual + 1) % palabras.length;

        setTimeout(() => {
          maquinaEscribir();
        }, 200);
      }
    }, 200);
  }
  useEffect(maquinaEscribir, []);
  
  return (
    <div className="elipse">
      <h5 ref={textMaquina}> Frontend Developer </h5>
    </div>
  );
}

export default Elipse