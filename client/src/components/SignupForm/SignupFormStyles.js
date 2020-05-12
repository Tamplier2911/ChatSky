import styled from "styled-components";

// mui
import { TextField, Typography, Button } from "@material-ui/core";

export const SignupFormContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: min-content;
`;

export const SignupFormElement = styled.form`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;
`;

export const SignupFormTitle = styled(Typography)``;

export const SignupFormInput = styled(TextField)`
  display: grid !important;

  & label {
    font-size: 1.5rem !important;
    top: -0.4rem !important;
  }

  & input {
    // font-size: 1.5rem !important;
  }
`;

export const SignupFormSubmit = styled(Button)`
  font-size: 1.6rem !important;
`;
