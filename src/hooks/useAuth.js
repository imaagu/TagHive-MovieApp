import React, { useState } from "react";
import { db } from "./../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import toast from "react-hot-toast";

const useAuth = () => {
  const history = useHistory();
  const [userDetailsAvailable, setUserDetailsAvailable] = useState(
    localStorage.getItem("userDetails") === "true" ? true : false
  );
  const [fetching, setFetching] = useState(false);
  const [userDetails, setDetails] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const creatingAccount = async ({ email, password }) => {
    try {
      let isExistingUser = false;
      setFetching(true);
      const userRef = db.collection("users");
      const allUserSnap = await userRef.get();
      const data = allUserSnap.docs.find((doc) => doc.data().email === email);

      if (data !== undefined) {
        isExistingUser = true;
      }

      if (isExistingUser) {
        setFetching(false);
        toast.error("User Exist");
        return false;
      }

      await userRef.add({
        email: email,
        password: password,
        havepreference: false,
        preference: {},
      });
      setFetching(false);
      toast.success("Created new Account");
      return true;
    } catch (e) {
      console.log("Creating New Account Error: ", e);
      toast.error("Failed! Try Again");

      setFetching(false);
      return false;
    }
  };

  const updateUserPreference = async (values) => {
    try {
      setFetching(true);
      const userRef = db.collection("users");
      await userRef.doc(userDetails.id).update({
        havepreference: true,
        preference: values,
      });
      setDetails({
        ...userDetails,
        havepreference: true,
        preference: values,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...userDetails,
          havepreference: true,
          preference: values,
        })
      );
      toast.success("Updated preference");
      setFetching(false);
      history.push("/movies");
    } catch (e) {
      console.log("Updating Preference Error ", e);
      setFetching(false);
      toast.error("Failed ! Try Again");
    }
  };

  const fetchUserDetails = async ({ email, password }) => {
    try {
      setFetching(true);
      const userRef = db.collection("users");
      const allUserSnap = await userRef.get();
      const index = allUserSnap.docs.findIndex(
        (doc) => doc.data().email === email && doc.data().password === password
      );

      if (index > -1) {
        setDetails({
          ...allUserSnap.docs[index].data(),
          id: allUserSnap.docs[index].id,
        });

        setUserDetailsAvailable(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...allUserSnap.docs[index].data(),
            id: allUserSnap.docs[index].id,
          })
        );
        localStorage.setItem("userDetails", "true");
      } else {
        setFetching(false);
        toast.error("No User Found");
        return;
      }
      setFetching(false);
      toast.success("Login Successful");
    } catch (e) {
      console.log("Fetching User Details Error: ", e);
      toast.error("Failed! Try Again");

      setFetching(false);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("user");
    setUserDetailsAvailable(false);
    setDetails(null);
    history.push("/Login");
  };

  return {
    userDetails,
    fetching,
    userDetailsAvailable,
    fetchUserDetails,
    creatingAccount,
    onLogout,
    updateUserPreference,
  };
};

export default useAuth;
