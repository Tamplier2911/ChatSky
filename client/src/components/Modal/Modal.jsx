// import "./Modal.scss";
import React from "react";
import ReactDOM from "react-dom";

// components
import ChannelForm from "../ChannelForm/ChannelForm";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectModalHidden,
  selectModalContent,
} from "../../redux/modal/modal.selectors";
import { closeModal } from "../../redux/modal/modal.actions";

// js render css
import {
  ModalContainer,
  ModalContent,
  ModalClose,
  ModalTitle,
  ModalText,
} from "./ModalStyles";

const Modal = ({ hidden, content, closeModal }) => {
  const { title, text, child } = content;

  return ReactDOM.createPortal(
    hidden ? null : (
      <ModalContainer onClick={() => closeModal()}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalClose onClick={() => closeModal()}>&#10006;</ModalClose>
          <ModalTitle>{title}</ModalTitle>
          <ModalText>{text}</ModalText>
          {child === "channel-form" ? <ChannelForm /> : null}
        </ModalContent>
      </ModalContainer>
    ),
    document.getElementById("modal")
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectModalHidden,
  content: selectModalContent,
});

export default connect(mapStateToProps, { closeModal })(Modal);
