import "./LoginForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserLoading } from "../../redux/user/user.selectors";
import { emailSignInStart } from "../../redux/user/user.actions";

// js render css
import {
  LoginFormContainer,
  LoginFormElement,
  LoginFormTitle,
  LoginFormInput,
  LoginFormButton,
} from "./LoginFormStyles";

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
    <LoginFormContainer>
      <LoginFormTitle variant="h4">I already have an account:</LoginFormTitle>
      <LoginFormElement autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <LoginFormInput
          id="login-email"
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <LoginFormInput
          id="login-password"
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
        />
        {!loading ? (
          <LoginFormButton color="primary" type="submit">
            Log In
          </LoginFormButton>
        ) : (
          <LoginFormButton disabled>Processing...</LoginFormButton>
        )}
      </LoginFormElement>
    </LoginFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectUserLoading,
});

export default connect(mapStateToProps, { emailSignInStart })(LoginForm);
