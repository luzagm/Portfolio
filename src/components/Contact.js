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
          <p>
            Si estás buscando un Front End para tu empresa o tienes algún
            proyecto en el quieres que colaboremos, no dudes en contactarme.
          </p>
          <p>GITHUB</p>
          <p>LINKEDIN</p>
          <p>TWITTER</p>
          <p>MAIL</p> <i className="icon fa fa-envelope"> </i>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
