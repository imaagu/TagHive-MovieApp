import React from "react";
import { Toaster } from "react-hot-toast";

const Main = (props) => {
  return (
    <div>
      {props.children}
      <Toaster />
    </div>
  );
};

export default Main;
