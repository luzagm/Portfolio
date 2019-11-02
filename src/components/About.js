import React from "react";
import Me from "../images/fotoyo.jpg";

const About = () => {
  return (
    <div className="about" id="aboutme">
      <div className="about__section">
        <img src={Me} className="about__picture__img" alt="" />
        <div className="about__me">
          <h2 className="about__me__title">quién soy</h2>

          <div className="about__me__description">
            <p className="about__me__text">
              Mallorquina actualmente asentada en Madrid. Diseñadora de
              formación, aventurera de corazón y ahora también desarrolladora
              frontend.
            </p>
            <p className="about__me__text">
              Inconformista, inquieta y curiosa, preparada siempre para
              enfrentarme a nuevos retos - Ya sea vivir en el extranjero, hacer
              una ruta de 12h en montaña o saltar en paracaídas.
            </p>
            <p className="about__me__text">
              La programación me ha abierto las puertas a un mundo fascinante y
              me siento muy orgullosa de haber tenido el valor de dar este
              enorme paso para reinventarme. Meticulosa y profesional con muchas
              ganas de seguir aprendiendo y creciendo dentro del sector
              tecnológico.
            </p>
            <p className="about__me__text">
              Mis compañeros me suelen describir como fortaleza y apoyo
              incondicional en el ámbito laboral, pero si les preguntases por el
              personal seguramente me definirían como la amante de los animales
              obsesionada con Japón a la que le apasiona viajar y dibujar manga
              en sus ratos libres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
