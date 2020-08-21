import React from "react";
import Banner from "./Banner";
import { Redirect } from "react-router-dom";
const Login = () => {
  const auth = localStorage.getItem("auth");

  return <div>{auth ? <Banner /> : <Redirect to="/" />}</div>;
};

export default Login;
