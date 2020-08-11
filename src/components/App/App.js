import React from "react";
import Header from "../Header/Header";
import Home from "../../Containers/Home/Home";
import Login from "../../Containers/Login/Login";
import Registration from "../../Containers/Registration/Registration";
import { Switch } from "react-router-dom";
import { navigation } from "../../Containers/navigation";
// import { Route, useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";

function App() {
  // const token = useSelector((state) => state.auth.token);
  // const history = useHistory();

  // useEffect(() => {
  //   if (token) {
  //     history.push(navigation.home);
  //   } else {
  //     history.push(navigation.login);
  //   }
  // }, [history, token]);

  return (
    <>
      <Header />
      <Switch>
        <PrivateRoute exact path={navigation.home} component={Home} />
        {/* <Route exact path={navigation.home} component={Home} /> */}
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
        {/* <Route path={navigation.login} component={Login} /> */}
        {/* <Route path={navigation.registration} component={Registration} /> */}
      </Switch>
    </>
  );
}

export default App;
