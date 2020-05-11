// import "./Messages.scss";
import React, { useEffect, useState } from "react";

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

// utils
import simpleMessagesSearch from "../../utils/simpleMessagesSearch";

// js render css
import {
  MessagesContainer,
  MessagesSearchButton,
  MessagesSearchSVG,
  MessageSearchForm,
  MessageSearchInput,
  MessagesSearchContainer,
} from "./MessagesStyles";

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

  const [searchOptions, setSearchOptions] = useState({
    searchQuery: "",
    searchBarVisible: false,
  });
  const { searchQuery, searchBarVisible } = searchOptions;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSearchOptions({ ...searchOptions, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  const toggleSearchbar = () => {
    setSearchOptions({ searchQuery: "", searchBarVisible: !searchBarVisible });
  };

  const filteredMessages = simpleMessagesSearch(
    messages,
    searchQuery.toLowerCase()
  );

  return (
    <MessagesContainer>
      <MessagesSearchContainer toggled={searchBarVisible ? 1 : 0}>
        <MessageSearchForm onSubmit={(e) => onFormSubmit(e)} autoComplete="off">
          <MessageSearchInput
            id="message-search"
            label="Search"
            value={searchQuery}
            name="searchQuery"
            onChange={(e) => onInputChange(e)}
          />
        </MessageSearchForm>
      </MessagesSearchContainer>
      <MessagesSearchButton
        onClick={() => toggleSearchbar()}
        toggled={searchBarVisible ? 1 : 0}
      >
        <MessagesSearchSVG toggled={searchBarVisible ? 1 : 0} />
      </MessagesSearchButton>

      <MessagesCollectionWithSpinner
        isLoading={isLoading}
        messages={filteredMessages}
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
