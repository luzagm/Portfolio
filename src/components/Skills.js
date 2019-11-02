import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import gulp from "../images/gulp.png";
import git from "../images/git.png";
import github from "../images/github.png";
import autocad from "../images/autocad.png";
import revit from "../images/revit.png";
import photoshop from "../images/Ps.svg";
import lightroom from "../images/Lr.svg";
import illustrator from "../images/Ai.svg";
import gimp from "../images/gimp.png";

const Skills = () => {
  return (
    <div class="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">lo que puedo hacer</h2>

        <div className="skills__description">
          <div className="skills__programmer">
            <h3 className="skills__subtitle">soy programadora</h3>
            <p className="skills__text">
              Como desarrolladora frontend suelo trabajar con Javascript y
              ReactJs. Actualmente estoy formandome también en JQuery, Redux y
              aprendiendo algo sobre Hooks. Y no nos olvidemos de la maquetación
              con Sass, CSS y sus amigos Flexbox, Grid y Bootstrap para dejar tu
              web o app perfecta y funcional.
            </p>
          </div>

          <div className="skills__designer">
            <h3 className="skills__subtitle">y también diseñadora</h3>
            <p className="skills__text">
              Como diseñadora de interiores (con amplios conocimientos de diseño
              gráfico por gusto y por necesidad) me siento cómoda trabajando con
              herramientas tales como AutoCad, Revit Building y Photoshop, pero
              también tengo conocimientos de Illustrator, InDesign y Gimp, entre
              otros.
            </p>
          </div>
        </div>

        <div className="tools__container">
          <img className="tools__img" src={html} alt="" />
          <img className="tools__img" src={css} alt="" />
          <img className="tools__img" src={js} alt="" />
          <img className="tools__img" src={react} alt="" />
          <img className="tools__img" src={sass} alt="" />
          <img className="tools__img" src={gulp} alt="" />
          <img className="tools__img" src={git} alt="" />
          <img className="tools__img" src={github} alt="" />
          <img className="tools__img" src={autocad} alt="" />
          <img className="tools__img" src={revit} alt="" />
          <img className="tools__img" src={photoshop} alt="" />
          <img className="tools__img" src={lightroom} alt="" />
          <img className="tools__img" src={illustrator} alt="" />
          <img className="tools__img" src={gimp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
