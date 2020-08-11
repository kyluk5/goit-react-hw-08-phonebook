import React from "react";
import { Route, Redirect } from "react-router-dom";
import { navigation } from "../../Containers/navigation";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthorized = useSelector((state) => state.auth.token);

  return (
    <Route
      {...routeProps}
      render={(props) => {
        return isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={navigation.login} />
        );
      }}
    />
  );
};
export default PrivateRoute;
