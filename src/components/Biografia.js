import React from "react";
import "./css/Biografia.css";
import { Likes } from "./Likes";
import { Enemigos } from "./Enemigos";

const imagen = {
  imageUrl: "https://i.imgur.com/dkWQtEZ.jpeg",
  imageSize: 200,
};

const frase = "“Solo hay una cosa que en realidad deseo..";
const frase2 =
  "Y es enfrentar al único oponente digno de mis mejores esfuerzos. Ser puesto a prueba y prevalecer.”";

const aparicion = "      Detective Comics #40 octubre 1948";
const creador = "Bill Finger y Dick Sprang";

const acercaDe = {
  meGusta: "Su inteligencia, personalidad e historia",
  noMeGusta: "Es bastante infravalorado",
  nombre: "Edward Nashton",
  residencia: "Gotham City",
  habilidades: "Inteligencia superior, intelecto nivel genio,",
  alias: "The Riddler, Prince of Puzzles",
  alineacion: "Malvado",
  estatusActual: "Activo",
};

const imagenes = {
  imageUrl:
    "https://i.pinimg.com/originals/e9/ac/25/e9ac256fb54a0fae03928fc66ee24a24.gif",
  imageSize: 300,
};

const imeg = {
  imageUrl:
    "https://www.digitaltrends.com/wp-content/uploads/2022/03/the-riddlers.jpg?fit=720%2C720&p=1",
  imageSize: 300,
};

const Recomendaciones = [
  { title: "- Batman Zero Year -", isComics: true, id: 1 },
  { title: "- Batman Hush -", isComics: true, id: 2 },
  { title: "- Batman New 52 #23.2 -", isComics: true, id: 3 },
  { title: "- The Long Halloween -", isComics: true, id: 4 },
  { title: "- Detective Comics Futures End -", isComics: true, id: 5 },
  { title: "- Arkhamverse (Videojuegos) -", isComics: false, id: 6 },
  { title: "- Gotham (Serie de Tv) -", isComics: false, id: 7 },
];

export const Biografia = () => {
  const otrosMedios = Recomendaciones.map((Recomendaciones) => (
    <ul
      key={Recomendaciones.id}
      style={{ color: Recomendaciones.isComics ? "white" : "green" }}
    >
      {Recomendaciones.title}
    </ul>
  ));
  return (
    <div>
      <hr />
      <p class="texto1">{frase}</p>
      <p class="texto1">{frase2}</p>
      <hr />
      <pciture>
        <img
          className="Diseno"
          src={imagen.imageUrl}
          alt="nygma"
          style={{
            width: imagen.imageSize,
            height: 300,
          }}
        />
      </pciture>
      <div class="cuadro">
        <p class="texto2">
          <span>- Primera aparición : </span>
          <span>{aparicion}</span>
        </p>
        <p class="texto2">
          <span>- Creadores : </span>
          <span>{creador}</span>
        </p>
        <hr class="hr2" />
        <p class="texto3">Origen</p>
        <p class="texto1">
          Creció en un hogar disfuncional en el cual su madre nunca estuvo para
          cuidarlo dejándolo a merced de su padre abusivo, quien era un
          alcohólico que no podía comprenderlo.
          <br />
          <br />
          Un día se enteró que en su escuela estaban organizando un concurso
          para ver quién podía resolver un rompecabezas complejo y determinado a
          ganar, Edward irrumpió en la escuela esa noche y usó sus
          Recomendaciones de texto para estudiar el problema con fuerza hasta
          que se le ocurrió una solución definitiva lo que conllevó a que ganara
          el concurso al día siguiente y fue recompensado con un libro de
          acertijos como premio. <br />
          <br /> Desafortunadamente, su padre se puso celoso de su éxito y
          comenzó a golpearlo para mantenerlo "fuera de los problemas" y para
          evitar que mintiera.
          <br />
          <br /> Como consecuencia de esas golpizas, Edward desarrolló una
          trastorno compulsivo que lo obliga a decir la verdad para probar su
          inocencia. <br />
          <br /> Sin embargo, también lo empujarían a convertirse en un criminal
          enloquecido. <br />
          <br /> Luego de que Edward creció decidió irse de su casa para
          convertirse en un actor de carnaval en donde utilizaba sus habilidades
          de inventor y de engaño para así poder despojar a las personas de su
          dinero, pero como esto no le era suficiente y ansiaba algo más grande
          se convierte en The Riddler y al mismo tiempo cambia su nombre a
          Edward Nygma para volverlo un juego de palabras que significan
          "E.Nigma".
          <br />
          <br /> Finalmente toma a Batman como su adversario ya que consideraba
          que este era lo suficientemente inteligente como para resolver sus
          acertijos. Desde entonces ambos se han enfrentado en diversas
          ocasiones.
        </p>
        <hr class="hr2" />
        <div class="contenedor-flex">
          <div class="texto4 cuadrito">
            <p>ACERCA DE</p>
            <p>
              <span class="negrita">Lo que me gusta: </span>
              <span class="alineado1">{acercaDe.meGusta}</span>
            </p>
            <p>
              <span class="negrita">No me gusta: </span>
              <span class="alineado2">{acercaDe.noMeGusta}</span>
            </p>
            <p>
              <span class="negrita">Nombre: </span>
              <span class="alineado3">{acercaDe.nombre}</span>
            </p>
            <p>
              <span class="negrita">Residencia: </span>
              <span class="alineado4">{acercaDe.residencia}</span>
            </p>
            <p>
              <span class="negrita">Habilidades: </span>
              <span class="alineado5">{acercaDe.habilidades}</span>
              <br />
              <span class="alineado6">
                gran imaginación e inventiva para realizar crimenes y<br />
                <span class="alineado6">
                  un conocimiento extenso sobre todo tipo de puzzles y
                  acertijos.
                </span>
              </span>
            </p>
            <p>
              <span class="negrita">Alias: </span>
              <span class="alineado7">{acercaDe.alias}</span>
            </p>
            <p>
              <span class="negrita">Estatus actual: </span>
              <span class="alineado8">{acercaDe.estatusActual}</span>
            </p>
          </div>

          <picture>
            <img
              className="gif"
              src={imagenes.imageUrl}
              style={{
                height: imagenes.imageSize,
                width: imagenes.imageSize,
              }}
            />
          </picture>
        </div>
        <hr class="hr2" />
        <p class="texto3">Enemigos</p>
        <Enemigos />
        <hr class="hr2" />
        <p class="texto3 centers">Recomendaciones</p>
        <p>
          Algunos cómics o historias en otros medios para conocer más a fondo al
          personaje y su desarrollo a lo largo de los años.
        </p>
        <br />
        {otrosMedios.length > 0 ? <ul>{otrosMedios}</ul> : <p>Error</p>}
        <br />
        <hr class="hr2" />
        <div class="contenedor-flex">
          <div class="cuadroUltimo">
            <p>¿Te gusto la biografia?</p>
            <p>Deja tu like aqui</p>
            <Likes texto="Me Gusta" color="#a9dda2" />
            <Likes texto="No Me Gusta" color="white" />
          </div>
          <picture>
            <img
              class="mover"
              src={imeg.imageUrl}
              style={{
                height: imeg.imageSize,
                width: 600,
              }}
            />
          </picture>
        </div>
      </div>
      <div class="volver">
        <div class="centrase">
          <h5>
            <a href="#volver" class="text_decora">
              Volver al Inicio &gt;
            </a>{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};
