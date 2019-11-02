import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = props => {
  return (
    <React.Fragment>
      <Header
        openMenu={props.openMenu}
        closeMenu={props.closeMenu}
        showMenu={props.showMenu}
      />
      <div className="contact__form">
        <div className="contact__container">
          <h2 id="contact" className="contact__title">
            contacto
          </h2>
          <p className="contact__text">
            Si estás buscando un Front End para tu empresa o tienes algún
            proyecto en el quieres que colaboremos, no dudes en contactarme.
          </p>

          <div className="icons">
            <div className="icon__wrapper">
              <i className="fab fa-github-alt icon"></i>
              <p>GITHUB</p>
            </div>
            <div className="icon__wrapper">
              <i className="fab fa-linkedin icon"></i>
              <p>LINKEDIN</p>
            </div>
            <div className="icon__wrapper">
              <i class="fab fa-twitter-square icon"></i>
              <p>TWITTER</p>
            </div>
            <div className="icon__wrapper">
              <i className="icon fa fa-envelope"> </i>
              <p>MAIL</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
