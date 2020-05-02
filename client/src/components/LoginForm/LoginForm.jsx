import "./LoginForm.scss";
import React, { useState } from "react";

// // fb
// import firebase from "../../utils/firebaseConfig";
// firebase.auth().createUserWithEmailAndPassword(email, password);

// DO LOGIN AND SIGN UP BASED ON REFERENCE CRWN CLOTHIN

// mui
import { TextField, Typography, Button } from "@material-ui/core";

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  console.log(email, password);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userCredentials);
  };

  return (
    <div className="loginForm">
      <Typography variant="h4">I already have an account:</Typography>
      <form
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
        className="loginForm__form"
      >
        <TextField
          id="login-email"
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          className="loginForm__input"
        />
        <TextField
          id="login-password"
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          className="loginForm__input"
        />
        <Button color="primary" className="loginForm__button" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
