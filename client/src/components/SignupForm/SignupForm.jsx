import "./SignupForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserLoading } from "../../redux/user/user.selectors";
import { formSignupStart } from "../../redux/user/user.actions";

// mui
import { TextField, Typography, Button } from "@material-ui/core";

const SignupForm = ({ formSignupStart, loading }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { displayName, email, password, passwordConfirm } = userCredentials;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return alert(
        "Please, make sure that password matches confirmation field."
      );
    } else if (
      !displayName.length ||
      !email.length ||
      !password.length ||
      !passwordConfirm.length
    ) {
      return alert(
        "Please, enter your name, email, password and password confirm."
      );
    } else if (password.length < 8 || passwordConfirm.length < 8) {
      return alert("Password must be at least 8 characters long.");
    }
    formSignupStart(userCredentials);
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
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
          name="displayName"
          value={displayName}
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
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => onInputChange(e)}
          className="signupForm__input"
        />
        {!loading ? (
          <Button color="primary" className="signupForm__button" type="submit">
            Sign Up
          </Button>
        ) : (
          <Button disabled className="signupForm__button">
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

export default connect(mapStateToProps, { formSignupStart })(SignupForm);
