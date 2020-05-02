import "./AuthPage.scss";
import React from "react";

// components
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

// js render css
import {} from "./AuthPageStyles";

const AuthPage = () => {
  return (
    <div className="authPage">
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default AuthPage;
