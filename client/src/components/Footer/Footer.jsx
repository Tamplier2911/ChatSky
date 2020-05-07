// import "./Footer.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signUserOutStart } from "../../redux/user/user.actions";

// js render css
import {
  FooterContainer,
  FooterNavHomeIcon,
  FooterNavChannelsIcon,
  FooterNavAuthIcon,
  FooterNavLogoutIcon,
  FooterNavChatIcon,
  FooterNavigation,
  FooterNavAction,
} from "./FooterStyles";

const Footer = ({ location, history, user, signUserOutStart }) => {
  const path = location.pathname.slice(1);
  return (
    <FooterContainer>
      <FooterNavigation>
        <FooterNavAction
          label="Home"
          value="home"
          onClick={() => {
            history.push("/");
          }}
          icon={<FooterNavHomeIcon path={path} />}
        />
        <FooterNavAction
          label="Channels"
          value="channels"
          onClick={() => {
            history.push("/channels");
          }}
          icon={<FooterNavChannelsIcon path={path} />}
        />
        {user ? (
          <FooterNavAction
            label="Logout"
            value="logout"
            onClick={(e) => {
              e.preventDefault();
              signUserOutStart();
            }}
            icon={<FooterNavLogoutIcon />}
          />
        ) : (
          <FooterNavAction
            label="Login"
            value="login"
            onClick={() => {
              history.push("/auth");
            }}
            icon={<FooterNavAuthIcon path={path} />}
          />
        )}

        <FooterNavAction
          label="Chat"
          value="chat"
          onClick={() => {
            history.push("/chat");
          }}
          icon={<FooterNavChatIcon path={path} />}
        />
      </FooterNavigation>
    </FooterContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default withRouter(
  connect(mapStateToProps, { signUserOutStart })(Footer)
);
