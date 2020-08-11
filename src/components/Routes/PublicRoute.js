import React from "react";
import { Route, Redirect } from "react-router-dom";
import { navigation } from "../../Containers/navigation";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...routeProps }) => {
  const isAuthorized = useSelector((state) => state.auth.token);

  return (
    <Route
      {...routeProps}
      render={(props) => {
        return isAuthorized && restricted ? (
          <Redirect to={navigation.home} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};
export default PublicRoute;
