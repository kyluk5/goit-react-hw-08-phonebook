import React from "react";
import Header from "../Header/Header";
import Home from "../../Containers/Home/Home";
import Login from "../../Containers/Login/Login";
import Registration from "../../Containers/Registration/Registration";
import { Switch } from "react-router-dom";
import { navigation } from "../../Containers/navigation";

import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import Contacts from "../../Containers/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path={navigation.home}
          component={Home}
          restricted={true}
        />

        <PublicRoute
          path={navigation.login}
          component={Login}
          restricted={true}
        />
        <PublicRoute
          path={navigation.registration}
          component={Registration}
          restricted={true}
        />

        <PrivateRoute path={navigation.contacts} component={Contacts} />
      </Switch>
    </>
  );
}

export default App;
