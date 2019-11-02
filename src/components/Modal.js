import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Modal = props => {
  return (
    <div id="myModal" className={`modal ${props.showModal}`}>
      <div className="modal__background">
        <Link to="/main#aboutme" className="modal__text" alt="sobre mi">
          sobre mi
        </Link>
        <p className="modal__text--bars">||</p>
        <Link to="/main#skills" className="modal__text" alt="skills">
          skills
        </Link>{" "}
        <p className="modal__text--bars">||</p>
        <Link to="/main#projects" className="modal__text" alt="proyectos">
          proyectos
        </Link>
        <div className="modal__close--btn" onClick={props.closeModal}>
          X
        </div>
      </div>
    </div>
  );
};

export default Modal;
