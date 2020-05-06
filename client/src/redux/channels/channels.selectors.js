import { createSelector } from "reselect";

const selectChannels = (state) => state.channels;

export const selectIsLoading = createSelector(
  [selectChannels],
  (channels) => channels.isLoading
);

export const selectAllChannels = createSelector(
  [selectChannels],
  (channels) => channels.allChannels
);

export const selectCurrentChannel = createSelector(
  [selectChannels],
  (channels) => channels.currentChannel
);
