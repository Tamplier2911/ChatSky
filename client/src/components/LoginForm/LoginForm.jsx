import "./LoginForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserLoading } from "../../redux/user/user.selectors";
import { emailSignInStart } from "../../redux/user/user.actions";

// mui
import { TextField, Typography, Button } from "@material-ui/core";

const LoginForm = ({ emailSignInStart, loading }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.length || !password.length) {
      return alert("Please, enter email and password");
    }
    emailSignInStart(userCredentials);
    setUserCredentials({
      email: "",
      password: "",
    });
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
        {!loading ? (
          <Button color="primary" className="loginForm__button" type="submit">
            Log In
          </Button>
        ) : (
          <Button disabled className="loginForm__button">
            Processing...
          </Button>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectUserLoading,
});

export default connect(mapStateToProps, { emailSignInStart })(LoginForm);
