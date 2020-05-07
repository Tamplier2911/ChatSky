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
