import "./SignupForm.scss";
import React, { useState } from "react";

// mui
import { TextField, Typography, Button } from "@material-ui/core";

const SignupForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { userName, email, password, passwordConfirm } = userCredentials;

  console.log(userName, email, password, passwordConfirm);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userCredentials);
  };

  return (
    <div className="signupForm">
      <Typography variant="h4">Create new account:</Typography>
      <form
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
        className="signupForm__form"
      >
        <TextField
          id="signup-name"
          label="Name"
          required
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => onInputChange(e)}
          className="signupForm__input"
        />
        <TextField
          id="signup-email"
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          className="signupForm__input"
        />
        <TextField
          id="signup-password"
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          className="signupForm__input"
        />
        <TextField
          id="signup-passwordConfirm"
          label="Confirm Password"
          required
          type="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => onInputChange(e)}
          className="signupForm__input"
        />
        <Button color="primary" className="signupForm__button" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
