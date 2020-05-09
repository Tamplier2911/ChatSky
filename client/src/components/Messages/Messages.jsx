// import "./Messages.scss";
import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentChannel } from "../../redux/channels/channels.selectors";
import {
  selectAllMessages,
  selectIsLoading,
} from "../../redux/messages/messages.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { loadAllMessagesStart } from "../../redux/messages/messages.actions";

// components
import WithSpinner from "../WithSpinner/WithSpinner";
import MessagesCollection from "../MessagesCollection/MessagesCollection";

// js render css
import { MessagesContainer } from "./MessagesStyles";

const MessagesCollectionWithSpinner = WithSpinner(MessagesCollection);

const Messages = ({
  loadAllMessagesStart,
  currentChannel,
  messages,
  isLoading,
  user,
}) => {
  useEffect(() => {
    if (currentChannel.id) {
      loadAllMessagesStart(currentChannel.id);
    }
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
  }, [currentChannel, loadAllMessagesStart]);
  return (
    <MessagesContainer>
      <MessagesCollectionWithSpinner
        isLoading={isLoading}
        messages={messages}
        userId={user.uid}
      />
    </MessagesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  messages: selectAllMessages,
  isLoading: selectIsLoading,
  currentChannel: selectCurrentChannel,
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { loadAllMessagesStart })(Messages);
