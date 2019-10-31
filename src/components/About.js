import React from "react";
import Me from "../images/kimono.jpg";

const About = () => {
  return (
    <div className="about" id="aboutme">
      <div className="about__section">
        <img src={Me} className="about__picture__img" alt="" />
        <div className="about__me">
          <h2 className="about__me__title">quién soy</h2>

          <div className="about__me__description">
            <p className="about__me__text">
              Diseñadora de formación, aventurera de corazón y ahora también
              desarrolladora Front End.
            </p>
            <p className="about__me__text">
              Inconformista, inquieta y curiosa. Los nuevos retos no me dan
              miedo, siempre me enfrento a ellos con ganas de superarme y de
              aprender, ya sea vivir en el extranjero, hacer una ruta de 12h en
              montaña, saltar en textacaídas o aprender programación.
            </p>
            <p className="about__me__par">
              Amante de los animales y dibujante de manga. Mi segundo idioma es
              el inglés y el tercero sería el sarcasmo. Me encanta que mis
              compañeros vean en mí fortaleza y apoyo incondicional en el ámbito
              laboral, pero si les preguntases por el personal seguramente me
              definirían como la loca de los gatos obsesionada con Japón a la
              que le apasiona viajar -{" "}
              <em>¡Porque no todo en esta vida es trabajar!</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
