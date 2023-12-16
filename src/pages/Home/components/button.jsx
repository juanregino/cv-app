import React from "react";

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;






//en para crear el boton//

// import React from 'react';
// import Button from './Button';

// function App() {
//   return (
//     <div>
//       <Button className="mi-boton" onClick={() => console.log('Haz clic aquí')}>
//         Haz clic aquí
//       </Button>
//       <Button className="otro-boton" onClick={() => console.log('Otro clic')}>
//         Otro botón
//       </Button>
//     </div>
//   );
// }

// export default App;




// y los estilos

// .mi-boton {
//   background-color: #4CAF50; /* Color de fondo */
//   border: none; /* Sin borde */
//   color: white; /* Color del texto */
//   padding: 15px 32px; /* Tamaño del botón */
//   text-align: center; /* Centrar texto */
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px; /* Tamaño de letra */
//   margin: 4px 2px;
//   cursor: pointer;
//   border-radius: 5px; /* Borde redondeado */
// }

// .otro-boton {
//   background-color: #f44336; /* Color de fondo */
//   border: none; /* Sin borde */
//   color: white; /* Color del texto */
//   padding: 15px 32px; /* Tamaño del botón */
//   text-align: center; /* Centrar texto */
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px; /* Tamaño de letra */
//   margin: 4px 2px;
//   cursor: pointer;
//   border-radius: 5px; /* Borde redondeado */
// }

