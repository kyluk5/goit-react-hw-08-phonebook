import React, { Component } from "react";
import Header from "../Header/Header";
import Home from "../../Containers/Home/Home";
import Login from "../../Containers/Login/Login";
import Registration from "../../Containers/Registration/Registration";
import { Switch, Route } from "react-router-dom";
import { navigation } from "../../Containers/navigation";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path={navigation.home} component={Home} />
          <Route path={navigation.login} component={Login} />
          <Route path={navigation.registration} component={Registration} />
        </Switch>
      </>
    );
  }
}

export default App;
