import { createSelector } from "reselect";

const selectMessages = (state) => state.messages;

export const selectAllMessages = createSelector(
  [selectMessages],
  (messages) => messages.allMessages
);

export const selectIsLoading = createSelector(
  [selectMessages],
  (messages) => messages.isLoading
);

export const selectLengthOfChannelUniqueUsers = createSelector(
  [selectAllMessages],
  (allMessages) =>
    allMessages.reduce(
      (acc, message) =>
        !acc.includes(message.user.displayName)
          ? (acc.push(message.user.displayName), acc)
          : acc,
      []
    ).length
);
