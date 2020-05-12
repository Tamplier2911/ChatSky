// import "./SignupForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserLoading } from "../../redux/user/user.selectors";
import { formSignupStart } from "../../redux/user/user.actions";

// js render css
import {
  SignupFormContainer,
  SignupFormElement,
  SignupFormTitle,
  SignupFormInput,
  SignupFormSubmit,
} from "./SignupFormStyles";

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
    <SignupFormContainer>
      <SignupFormTitle variant="h4">Create new account:</SignupFormTitle>
      <SignupFormElement autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <SignupFormInput
          id="signup-name"
          label="Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={(e) => onInputChange(e)}
        />
        <SignupFormInput
          id="signup-email"
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <SignupFormInput
          id="signup-password"
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
        />
        <SignupFormInput
          id="signup-passwordConfirm"
          label="Confirm Password"
          required
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => onInputChange(e)}
        />
        {!loading ? (
          <SignupFormSubmit color="primary" type="submit">
            Sign Up
          </SignupFormSubmit>
        ) : (
          <SignupFormSubmit disabled>Processing...</SignupFormSubmit>
        )}
      </SignupFormElement>
    </SignupFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectUserLoading,
});

export default connect(mapStateToProps, { formSignupStart })(SignupForm);
