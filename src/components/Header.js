import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import LeftBar from "../images/left.png";
import RightBar from "../images/right.png";
import Logo from "../images/hikari.png";

const Header = props => {
  return (
    <div className="header">
      <div className="header__contact">
        <img className="header__contact--icon" src={LeftBar} alt="" />
        <Link to="/contact">
          <p className="header__contact--text">contacto</p>
        </Link>
      </div>

      <div className="header__logo">
        <Link to="/">
          <img className="header__logo--img" src={Logo} alt="" />
        </Link>
      </div>

      <div className="header__menu" onClick={props.openMenu}>
        <p className="header__menu--text">menu</p>
        <img className="header__menu--icon" src={RightBar} alt="" />
      </div>

      <Menu closeMenu={props.closeMenu} showMenu={props.showMenu} />
    </div>
  );
};

export default Header;
