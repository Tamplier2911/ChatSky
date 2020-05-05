import { createSelector } from "reselect";

const selectModal = (state) => state.modal;

export const selectModalHidden = createSelector(
  [selectModal],
  (modal) => modal.isHidden
);

export const selectModalContent = createSelector(
  [selectModal],
  (modal) => modal.content
);
