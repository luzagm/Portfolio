import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "hidden"
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.renderContact = this.renderContact.bind(this);
  }

  showModal() {
    this.setState({
      class: "",
      hide: ""
    });
  }

  hideModal() {
    this.setState({
      class: "hidden"
    });
  }

  openModal() {
    this.showModal();
  }

  closeModal() {
    this.hideModal();
  }

  renderHome() {
    return (
      <Home
        openModal={this.openModal}
        closeModal={this.closeModal}
        showModal={this.state.class}
      />
    );
  }

  renderContact() {
    return (
      <div>
        <Header
          openModal={this.openModal}
          closeModal={this.closeModal}
          showModal={this.state.class}
        />
        <Contact />
        <Footer />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={this.renderHome} />
          <Route exact path="/main" component={Main} />
          {/*  <Route exact path="/main/about" component={About} />
          <Route exact path="/main/skills" component={Skills} />
          <Route exact path="/main/projects" component={Projects} /> */}
          {<Route path="/contact" render={this.renderContact} />}
        </Switch>
      </div>
    );
  }
}

export default App;
