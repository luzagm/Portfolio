import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import LeftBar from "../images/left.png";
import RightBar from "../images/right.png";
import Logo from "../images/hikari.png";

const Home = props => {
  return (
    <div className="landing">
      <div className="landing__header">
        <div className="contact text__effect">
          <img className="landing__header--contactbar" src={LeftBar} alt="" />
          <Link to="/contact">
            <p className="contact__text" alt="contacto">
              contacto
            </p>
          </Link>
        </div>

        <div className="landing__logo--box">
          <img className="landing__logo--img" src={Logo} alt="logo" />
        </div>

        <div className="menu text__effect" onClick={props.openMenu}>
          <p className="menu__text" alt="menu">
            menu
          </p>
          <img className="landing__header--menubar" src={RightBar} alt="" />
        </div>
      </div>

      <div className="landing__main">
        <h1 className="landing__main--name">Luz Aguirre Morales</h1>
        <h2 className="landing__main--job">desarrolladora front-end</h2>
      </div>

      <Menu closeMenu={props.closeMenu} showMenu={props.showMenu} />
    </div>
  );
};

export default Home;
