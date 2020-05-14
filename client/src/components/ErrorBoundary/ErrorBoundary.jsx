import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { openModal } from "../../redux/modal/modal.actions";

// js render css
import {
  ErrorBoundaryContainer,
  ErrorBoundaryMessage,
  ErrorBoundaryHeader,
  ErrorBoundaryText,
  ErrorBoundarySVG,
} from "./ErrorBoundaryStyles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(err) {
    return { hasErrored: true };
  }

  componentDidCatch(err, info) {
    const { openModal } = this.props;
    openModal({
      title: "Error!",
      text: err.message || "Something went wrong!",
    });
  }

  render() {
    const { hasErrored } = this.state;
    if (hasErrored) {
      return (
        <ErrorBoundaryContainer>
          <ErrorBoundaryMessage>
            <ErrorBoundaryHeader>Unfortunately!</ErrorBoundaryHeader>
            <ErrorBoundaryText>
              Something went wrong! Please, check your internet connect.
            </ErrorBoundaryText>
            <ErrorBoundarySVG />
          </ErrorBoundaryMessage>
        </ErrorBoundaryContainer>
      );
    } else {
      return this.props.children;
    }
  }
}

export default connect(null, { openModal })(ErrorBoundary);
