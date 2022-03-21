import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { userDetailsAvailable } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        userDetailsAvailable ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
