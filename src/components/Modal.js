import React from "react";
/* import { Link } from "react-router-dom"; */

const Modal = props => {
  return (
    <div id="myModal" className={`modal ${props.showModal}`}>
      <div className="modal__background">
        <a
          /* href={`/main/${aboutme}`} */ className="modal__text"
          alt="sobre mi"
        >
          sobre mi
        </a>
        <p className="modal__text--bars">||</p>
        <a href="main.html#skills" className="modal__text" alt="skills">
          skills
        </a>{" "}
        <p className="modal__text--bars">||</p>
        <a href="main.html#projects" className="modal__text" alt="proyectos">
          proyectos
        </a>
        <div className="modal__close--btn" onClick={props.closeModal}>
          X
        </div>
      </div>
    </div>
  );
};

export default Modal;
