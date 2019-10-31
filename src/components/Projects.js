import React from "react";
import anonymous from "../images/ExamenModulo1.png";
import atlas from "../images/Atlas.png";
import series from "../images/BuscadorDeSeries.png";
import cards from "../images/AwesomeProfileCards.png";
import rickandmorty from "../images/RickAndMorty.png";
import liquid from "../images/LiquidSquad.png";

const Projects = () => {
  return (
    <div className="projects__wrapper" id="projects">
      <div>
        <h2 className="projects__title">proyectos</h2>
      </div>

      <div className="projects__box--wrapper">
        <div className="projects__box">
          <img className="projects__box--image" src={anonymous} alt="" />
          <div className="mask">
            <h2>Anonymous Proxy</h2>
            <p>
              <span>
                <strong>HTML</strong> || <strong>CSS</strong> ||
                <strong>Flexbox</strong> || <strong>Grid</strong>
              </span>
              <br />
              Mi primera web responsive.
            </p>

            <a
              href="https://github.com/luzagm/m1-evaluacion-final-luzagm"
              className="info"
            >
              Código
            </a>
            <a
              href="http://beta.adalab.es/m1-evaluacion-final-luzagm/"
              className="info"
            >
              Demo
            </a>
          </div>
        </div>

        <div className="projects__box">
          <img className="projects__box--image" src={atlas} alt="" />
          <div className="mask">
            <h2>Atlas - Web grupal</h2>
            <p>
              <span>
                <strong>Flexbox</strong> || <strong>Transiciones</strong> ||
                <strong>Formularios</strong> || <strong>Gulp</strong> ||
                <strong>Sass</strong>
              </span>
              <br />
              Primer proyecto grupal de Adalab en el que desarrollamos una
              página web de contacto profesional.
            </p>
            <a href="https://github.com/luzagm/Atlas" className="info">
              Código
            </a>
            <a href="https://luzagm.github.io/Atlas/" className="info">
              Demo
            </a>
          </div>
        </div>
        <div className="projects__box">
          <img className="projects__box--image" src={series} alt="" />
          <div className="mask">
            <h2>Buscados de series</h2>
            <p>
              <span>
                <strong>Javascript</strong> || <strong>Eventos</strong> ||
                <strong>Arrays</strong> || <strong>localStorage</strong> ||
                <strong>API</strong>
              </span>
              <br />
              Buscador de series en el que, además, podemos seleccionar y
              guardar nuestros favoritos.
            </p>
            <a
              href="https://github.com/luzagm/m2-evaluacion-final-luzagm"
              className="info"
            >
              Código
            </a>
            <a
              href="http://beta.adalab.es/m2-evaluacion-final-luzagm/"
              className="info"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="projects__box">
          <img className="projects__box--image" src={cards} alt="" />
          <div className="mask">
            <h2>Awesome profile cards</h2>
            <p>
              <span>
                <strong>Javascript</strong> || <strong>Eventos</strong> ||
                <strong>Arrays</strong> || <strong>localStorage</strong>
              </span>
              <br />
              Proyecto de Adalab con el que podemos crear tarjetas de contacto
              virtuales - Refactorizado posteriormente en <em>React</em>.
            </p>
            <a
              href="https://github.com/luzagm/grace-m2-komorebi"
              className="info"
            >
              Código
            </a>
            <a
              href="https://luzagm.github.io/grace-m2-komorebi/"
              className="info"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="projects__box">
          <img className="projects__box--image" src={rickandmorty} alt="" />
          <div className="mask">
            <h2>Buscador de personajes</h2>
            <p>
              <span>
                <strong>React</strong> || <strong>Componentes</strong> ||
                <strong>Estado</strong> || <strong>Router</strong> ||
                <strong>API</strong>
              </span>
              <br />
              Creación de un buscador de personajes de Ricky&Morty, en el que
              además podemos filtarlos por nombre y por especie.
            </p>
            <a
              href="https://github.com/luzagm/m3-evaluacion-final-luzagm"
              className="info"
            >
              Código
            </a>
            <a
              href="http://beta.adalab.es/m3-evaluacion-final-luzagm/#/"
              className="info"
            >
              Demo
            </a>
          </div>
        </div>

        <div className="projects__box">
          <img className="projects__box--image" src={liquid} alt="" />
          <div className="mask">
            <h2>Holidays Manager</h2>
            <p>
              <span>
                <strong>React</strong> || <strong>Componentes</strong> ||
                <strong>Estado</strong> || <strong>Router</strong> ||
                <strong>API</strong>
              </span>
              <br />
              Proyecto grupal en el que creamos una aplicación de gestión de
              vacaciones para Liquid Squad de Accenture.
            </p>
            <a href="https://github.com/luzagm/g-m4-AquaSquad" className="info">
              Código
            </a>
            <a href="http://beta.adalab.es/g-m4-AquaSquad/#/" className="info">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
