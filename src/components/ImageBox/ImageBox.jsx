import { Children } from "react";
import "../../index.css"

export const ImageBox = ({img,className,onClick,children}) => {

    let flag = true;

   if (flag){
    console.log("se muestra la imagen")
   }
   else{
    console.log("no se  muestra la imagen")
   }

  return (
    <div className={className}>
      {img}
      {children}
    </div>
  );
};

// variable tipo bandera
// como agg una etiqueta como prop
