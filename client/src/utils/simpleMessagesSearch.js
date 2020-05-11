const simpleMessagesSearch = (messages, query) =>
  messages.filter((message) => {
    const { messageContent, user } = message;
    if (messageContent && user) {
      if (
        messageContent.content.toLowerCase().includes(query) ||
        user.displayName.toLowerCase().includes(query)
      )
        return true;
    }
    return false;
  });

export default simpleMessagesSearch;
