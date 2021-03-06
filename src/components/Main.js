import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = props => {
  return (
    <React.Fragment>
      <Header
        openMenu={props.openMenu}
        closeMenu={props.closeMenu}
        showMenu={props.showMenu}
      />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
