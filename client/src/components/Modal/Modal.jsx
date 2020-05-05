import "./Modal.scss";
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

const Modal = ({ hidden, content, closeModal }) => {
  const { title, text, child } = content;

  return ReactDOM.createPortal(
    hidden ? null : (
      <div className="modal" onClick={() => closeModal()}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <span className="modal__content--close" onClick={() => closeModal()}>
            &#10006;
          </span>
          <h3 className="modal__content--title">{title}</h3>
          <p className="modal__content--text">{text}</p>
          {/* {child.WrappedComponent ? child.WrappedComponent() : null} */}
          {child === "channel-form" ? <ChannelForm /> : null}
        </div>
      </div>
    ),
    document.getElementById("modal")
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectModalHidden,
  content: selectModalContent,
});

export default connect(mapStateToProps, { closeModal })(Modal);
