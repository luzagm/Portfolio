import React from "react";
import LeftBar from "../images/left.png";
import RightBar from "../images/right.png";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__left">
        <img class="footer__left--icon" src={LeftBar} alt="" />
        <span class="footer__left--text"> Luz Aguirre Morales</span>
      </div>

      <div class="footer__right">
        <span class="footer__right--copyright">©</span>{" "}
        <span class="footer__right--year">2019</span>
        <img class="footer__right--icon" src={RightBar} alt="" />
      </div>
    </div>
  );
};

export default Footer;
