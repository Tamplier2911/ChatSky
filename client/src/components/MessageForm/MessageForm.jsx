// import "./MessageForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectIsLoading } from "../../redux/messages/messages.selectors";
import { selectCurrentChannel } from "../../redux/channels/channels.selectors";
import { createOneMessageStart } from "../../redux/messages/messages.actions";

// components
import MediaInput from "../MediaInput/MediaInput";

// js render css
import {
  MessageFormContainer,
  MessageFormElement,
  MessageFormUserCirle,
  MessageFormAdorment,
  MessageFormTextInput,
  MessageFormButton,
  MessageFormSendIcon,
} from "./MessageFormStyles";

const MessageForm = ({ user, channel, createOneMessageStart, isLoading }) => {
  const [messageContent, setMessageContent] = useState({
    content: "",
    media: null,
  });
  const { content } = messageContent;

  const onInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "media")
      return setMessageContent({ ...messageContent, [name]: files[0] });
    setMessageContent({ ...messageContent, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("clicked!");
    createOneMessageStart({ messageContent, user, channel });
    setMessageContent({
      content: "",
      media: null,
    });
  };

  return (
    <MessageFormContainer>
      <MessageFormElement autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <MediaInput
          name="media"
          label="Media"
          accept="image/*"
          type="file"
          id="message-media"
          onChange={(e) => onInputChange(e)}
        />
        <MessageFormTextInput
          id="message-content"
          label={user.displayName}
          name="content"
          value={content}
          required
          onChange={(e) => onInputChange(e)}
          InputProps={{
            startAdornment: (
              <MessageFormAdorment position="start">
                <MessageFormUserCirle />
              </MessageFormAdorment>
            ),
          }}
        />
        <MessageFormButton
          color="primary"
          aria-label="upload picture"
          component="button"
          type="submit"
          {...(isLoading ? { disabled: true } : null)}
        >
          <MessageFormSendIcon />
        </MessageFormButton>
      </MessageFormElement>
    </MessageFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  channel: selectCurrentChannel,
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps, { createOneMessageStart })(MessageForm);
