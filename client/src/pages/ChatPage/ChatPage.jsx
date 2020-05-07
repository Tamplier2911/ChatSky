// import "./ChatPage.scss";
import React from "react";

// components
import MessageBar from "../../components/MessageBar/MessageBar";

// js rendering css
import { ChatPageContainer } from "./ChatPageStyles";

const ChatPage = () => {
  return (
    <ChatPageContainer>
      <div>Chat Page</div>
      <MessageBar />
    </ChatPageContainer>
  );
};

export default ChatPage;
