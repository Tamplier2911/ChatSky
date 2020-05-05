import modalTypes from "./modal.types";

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

export const openModal = (modalData) => ({
  type: OPEN_MODAL,
  payload: modalData,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
