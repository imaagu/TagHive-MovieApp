import React, { useState, useEffect } from "react";
import LoginForm from "./loginForm";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks";

const Login = (props) => {
  const { userDetails, fetching, userDetailsAvailable, fetchUserDetails } =
    useAuth();
  const history = useHistory();

  useEffect(() => {
    if (userDetailsAvailable) {
      if (userDetails.havepreference) history.push("/movies");
      else history.push("/preference");
    }
  }, [userDetails, userDetailsAvailable]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <LoginForm onSubmit={fetchUserDetails} isSubmitting={fetching} />
      </div>
    </div>
  );
};

export default Login;
