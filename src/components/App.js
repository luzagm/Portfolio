import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Contact from "./Contact";
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
    this.renderMain = this.renderMain.bind(this);
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

  renderMain() {
    return (
      <div>
        <Main
          openModal={this.openModal}
          closeModal={this.closeModal}
          showModal={this.state.class}
        />
      </div>
    );
  }

  renderContact() {
    return (
      <div>
        <Contact
          openModal={this.openModal}
          closeModal={this.closeModal}
          showModal={this.state.class}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={this.renderHome} />
          <Route exact path="/main" render={this.renderMain} />
          {<Route path="/contact" render={this.renderContact} />}
        </Switch>
      </div>
    );
  }
}

export default App;
