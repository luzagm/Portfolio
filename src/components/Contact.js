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

          <div className="contact__icons">
            <a
              href="https://github.com/luzagm"
              target="blank"
              className="contact__link"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-alt icon"></i>
              <p className="contact__text">@luzagm</p>
            </a>

            <a
              href="https://www.linkedin.com/in/luzaguirremorales/"
              target="blank"
              className="contact__link"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin icon"></i>
              <p className="contact__text">@luzaguirremorales</p>
            </a>
            <a
              href="https://twitter.com/light__am"
              target="blank"
              className="contact__link"
            >
              <i class="fab fa-twitter-square icon"></i>
              <p className="contact__text">@light__am</p>
            </a>
            <a
              href="mailto:luz.aguirre.mo@gmail.com"
              target="blank"
              className="contact__link"
              rel="noopener noreferrer"
            >
              <i className="icon fa fa-envelope"> </i>
              <p className="contact__text">luz.aguirre.mo@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
