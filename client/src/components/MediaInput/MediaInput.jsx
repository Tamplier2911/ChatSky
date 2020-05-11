import React from "react";

// js render css
import {
  MediaInputContainer,
  MediaInputElement,
  MediaInputLabel,
  MediaInputButton,
  MediaInputIcon,
} from "./MediaInputStyles";

const MediaInput = ({ label, id, disabled, ...otherProps }) => {
  return (
    <MediaInputContainer>
      <MediaInputElement id={id} {...otherProps} />
      {label ? (
        <MediaInputLabel htmlFor={id}>
          <MediaInputButton
            color="primary"
            aria-label="upload picture"
            component="span"
            {...disabled}
          >
            <MediaInputIcon />
          </MediaInputButton>
        </MediaInputLabel>
      ) : null}
    </MediaInputContainer>
  );
};

export default MediaInput;
