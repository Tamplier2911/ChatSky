import "./MessageBar";
import React from "react";

// components
import MessageForm from "../MessageForm/MessageForm";

// js render css
import { MessageBarContainer } from "./MessageBarStyles";

const MessageBar = () => {
  return (
    <MessageBarContainer>
      <MessageForm />
    </MessageBarContainer>
  );
};

export default MessageBar;
