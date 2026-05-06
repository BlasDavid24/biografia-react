import React from "react";
import "./css/Enemigos.css";

const enemigos = {
  uno: "Batman",
  dos: "Escuadrón Suicida",
  tres: "Jim Gordon",
  cuatro: "Catwoman",
  cinco: "Hush",
  seis: "Pison Ivy",
  siete: "Flash",
  ocho: "Batgirl",
};

export const Enemigos = () => {
  return (
    <div class="moverse">
      <div class="cuadroGeneral1">
        <p class="textito">{enemigos.uno}</p>
        <picture>
          <img
            src="https://gifdb.com/images/thumbnail/dc-comics-lienzo-animated-drawing-wo7qbny20vinrtsk.gif"
            class="lienzo borde"
          />
        </picture>
      </div>
      <div class="cuadroGeneral2">
        <p class="textito">{enemigos.dos}</p>
        <picture>
          <img
            src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/comics.batanga.com/files/Suicide-Squad-La-serie-de-los-condenados-7.gif"
            class="lienzo borde"
          />
        </picture>
      </div>
      <div class="cuadroGeneral3">
        <p class="textito">{enemigos.tres}</p>
        <picture>
          <img src="https://i.gifer.com/7McA.gif" class="lienzo borde" />
        </picture>
      </div>
      <div class="cuadroGeneral4">
        <p class="textito">{enemigos.cuatro}</p>
        <picture>
          <img src="https://i.gifer.com/SqDx.gif" class="lienzo borde" />
        </picture>
      </div>
      <div class="cuadroGeneral1">
        <p class="textito">{enemigos.cinco}</p>
        <picture>
          <img src="https://i.gifer.com/XhDy.gif" class="lienzo borde" />
        </picture>
      </div>
      <div class="cuadroGeneral2">
        <p class="textito">{enemigos.seis}</p>
        <picture>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ba8b2ff-6248-4a1d-bfe1-ba4c41dd2fcf/deyqo1q-539f3a39-0d97-462e-89c7-021a22d88352.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiYThiMmZmLTYyNDgtNGExZC1iZmUxLWJhNGM0MWRkMmZjZlwvZGV5cW8xcS01MzlmM2EzOS0wZDk3LTQ2MmUtODljNy0wMjFhMjJkODgzNTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4EvDbyC3OuPZ-RKW98rpFa2Il4Ymi_lMx7O3HlzT4LA"
            class="lienzo borde"
          />
        </picture>
      </div>
      <div class="cuadroGeneral3">
        <p class="textito">{enemigos.siete}</p>
        <picture>
          <img
            src="https://media.tenor.com/HgfWyM6Yd-UAAAAC/barry-allen-the-flash.gif"
            class="lienzo borde"
          />
        </picture>
      </div>
      <div class="cuadroGeneral4">
        <p class="textito">{enemigos.ocho}</p>
        <picture>
          <img
            src="https://media1.tenor.com/m/Pm3eXEukb6IAAAAd/batgirl-batman.gif"
            class="lienzo borde"
          />
        </picture>
      </div>
      
    </div>
  );
};
