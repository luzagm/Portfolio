import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import LeftBar from "../images/left.png";
import RightBar from "../images/right.png";
import Logo from "../images/hikari.png";

const Header = props => {
  console.log(props.closeModal);
  return (
    <div className="header">
      <div className="header__contact">
        <img className="header__contact--icon" src={LeftBar} alt="" />
        <Link to="/contact">
          <p className="header__contact--text">contact</p>
        </Link>
      </div>

      <div className="header__logo">
        <Link to="/">
          <img className="header__logo--img" src={Logo} alt="" />
        </Link>
      </div>

      <div className="header__menu" onClick={props.openModal}>
        <p className="header__menu--text">menu</p>
        <img className="header__menu--icon" src={RightBar} alt="" />
      </div>

      <Modal closeModal={props.closeModal} showModal={props.showModal} />
    </div>
  );
};

export default Header;
