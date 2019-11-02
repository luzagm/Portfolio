import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import CloseBtn from "../images/close.png";

const Menu = props => {
  return (
    <div id="myModal" className={`modal ${props.showMenu}`}>
      <div className="modal__background">
        <Link
          to="/main#aboutme"
          className="modal__text"
          alt="sobre mi"
          onClick={props.closeMenu}
        >
          sobre mi
        </Link>
        <p className="modal__text--bars">·</p>
        <Link
          to="/main#skills"
          className="modal__text"
          alt="skills"
          onClick={props.closeMenu}
        >
          skills
        </Link>{" "}
        <p className="modal__text--bars">·</p>
        <Link
          to="/main#projects"
          className="modal__text"
          alt="proyectos"
          onClick={props.closeMenu}
        >
          proyectos
        </Link>
        <div className="modal__close--btn" onClick={props.closeMenu}>
          <img src={CloseBtn} className="close__btn" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
