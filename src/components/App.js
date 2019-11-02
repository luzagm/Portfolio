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
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderContact = this.renderContact.bind(this);
  }

  showMenu() {
    this.setState({
      class: "",
      hide: ""
    });
  }

  hideMenu() {
    this.setState({
      class: "hidden"
    });
  }

  openMenu() {
    this.showMenu();
  }

  closeMenu() {
    this.hideMenu();
  }

  renderHome() {
    return (
      <Home
        openMenu={this.openMenu}
        closeMenu={this.closeMenu}
        showMenu={this.state.class}
      />
    );
  }

  renderMain() {
    return (
      <div>
        <Main
          openMenu={this.openMenu}
          closeMenu={this.closeMenu}
          showMenu={this.state.class}
        />
      </div>
    );
  }

  renderContact() {
    return (
      <div>
        <Contact
          openMenu={this.openMenu}
          closeMenu={this.closeMenu}
          showMenu={this.state.class}
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
