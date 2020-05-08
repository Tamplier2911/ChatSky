import styled from "styled-components";

// mui
import { TextField, InputAdornment, IconButton } from "@material-ui/core";

// mico
import AccountCircle from "@material-ui/icons/AccountCircle";
import SendIcon from "@material-ui/icons/Send";

export const MessageFormContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: min-content;
  align-content: center;
  padding: 0 2rem;
`;

export const MessageFormElement = styled.form`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;
  align-items: center;
`;

export const MessageFormAdorment = styled(InputAdornment)``;

export const MessageFormUserCirle = styled(AccountCircle)``;

export const MessageFormTextInput = styled(TextField)`
  display: grid !important;

  & label {
    font-size: 1.5rem !important;
    top: -0.4rem !important;
  }

  & input {
    // font-size: 1.5rem !important;
  }
`;

export const MessageFormButton = styled(IconButton)`
  font-size: 1.6rem !important;

  & span svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const MessageFormSendIcon = styled(SendIcon)``;
