import HomePage from "../../HomePage";
import React, { useEffect, useRef } from "react";
/**
   *? No se usa queryselector para hacer referencia a un elemento html sino useRef
   * const textMaquina = document.querySelector("#maquina_escribir")
   * */
  //*se usa es useRef en React
 

  function MaquinaEscribir() {
    /**
     *? No se usa queryselector para hacer referencia a un elemento html sino useRef
     * const textMaquina = document.querySelector("#maquina_escribir")
     * */
    //*se usa es useRef en React
    const textMaquina = useRef();

    const palabras = [
      "Software Developer",
      "Frontend ",
      "Much More",
      "In Progress...👨‍💻",
    ];

    let indiceActual = 0;

    function maquinaEscribir() {
      console.log("ejecutando");
      textMaquina.current.innerHTML = "";

      let textArray = palabras[indiceActual];

      textArray = textArray.split("");
      let i = 0;

      const pintarString = setInterval(() => {
        if (textMaquina.current == null) return;
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
    useEffect(() => {
      maquinaEscribir();
    }, []);

    return <span ref={textMaquina}></span>;
  }
  export default MaquinaEscribir