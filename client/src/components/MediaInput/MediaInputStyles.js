import styled from "styled-components";

// mui
import { IconButton } from "@material-ui/core";

// mico
import PhotoCamera from "@material-ui/icons/PhotoCamera";

export const MediaInputContainer = styled.div`
  display: grid;
`;

export const MediaInputElement = styled.input`
  display: none;
`;

export const MediaInputLabel = styled.label``;

export const MediaInputButton = styled(IconButton)`
  font-size: 1.6rem !important;

  & span svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const MediaInputIcon = styled(PhotoCamera)``;
