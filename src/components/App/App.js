import React from "react";
import Header from "../Header/Header";
import Home from "../../Containers/Home/Home";
import Login from "../../Containers/Login/Login";
import Registration from "../../Containers/Registration/Registration";
import { Switch, Route, useHistory } from "react-router-dom";
import { navigation } from "../../Containers/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const token = useSelector((state) => state.auth.token);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push(navigation.home);
    } else {
      history.push(navigation.login);
    }
  }, [history, token]);

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

export default App;
