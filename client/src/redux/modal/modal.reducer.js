import modalTypes from "./modal.types";
const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

const INITIAL_STATE = {
  content: {
    title: "",
    text: "",
    child: null,
  },
  isHidden: true,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        content: {
          title: action.payload.title,
          text: action.payload.text,
          child: action.payload.child || null,
        },
        isHidden: false,
      };
    case CLOSE_MODAL:
      return { ...state, title: "", content: "", isHidden: true, child: null };
    default:
      return state;
  }
};

export default modalReducer;
