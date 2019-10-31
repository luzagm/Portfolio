import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <About />
        <Skills />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
