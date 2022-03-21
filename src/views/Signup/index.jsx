import React, { useState, useEffect } from "react";
import SignupForm from "./signupForm";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks";

const Signup = (props) => {
  const { userDetails, fetching, userDetailsAvailable, creatingAccount } =
    useAuth();
  const history = useHistory();

  const onAddAccount = async (value) => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("user");

    const isSuccess = await creatingAccount(value);
    console.log(isSuccess);
    if (isSuccess === true) {
      history.push("/Login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Create new Account</h3>
        <SignupForm onSubmit={onAddAccount} isSubmitting={fetching} />
      </div>
    </div>
  );
};

export default Signup;
