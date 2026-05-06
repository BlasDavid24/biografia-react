import React from 'react'
import "./css/Biografia.css"
import { useState } from "react";

export const Likes = ({texto, color}) => {
  /*useState() */
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
    alert("Gracias por tu voto!");
  };
  return (
    <div>
      <button  class="cajita" onClick={handleClick} style={{ background: color }}>
        {contador === 0 ? "No hay votos" : contador + " " + texto}
      </button>
    </div>
  );
};