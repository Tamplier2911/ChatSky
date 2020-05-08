// import "./MessagesCollection.scss";
import React from "react";

// components
import Message from "../Message/Message";

// js render css
import { MessagesCollectionContainer } from "./MessagesCollectionStyles";

export const MessagesCollection = ({ messages, userId }) => {
  return (
    <MessagesCollectionContainer>
      {messages.map((message, i) => (
        <Message {...message} userId={userId} key={message.user.uid + i} />
      ))}
    </MessagesCollectionContainer>
  );
};

export default MessagesCollection;
