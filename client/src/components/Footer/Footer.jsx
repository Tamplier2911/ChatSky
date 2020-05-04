import "./Footer.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signUserOutStart } from "../../redux/user/user.actions";

// mui
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

// mico
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import HowToRegRoundedIcon from "@material-ui/icons/HowToRegRounded";
import PersonAddDisabledRoundedIcon from "@material-ui/icons/PersonAddDisabledRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";

const Footer = ({ history, user, signUserOutStart }) => {
  return (
    <footer className="footer">
      <BottomNavigation>
        <BottomNavigationAction
          label="Home"
          value="home"
          className="footer__button"
          onClick={() => {
            history.push("/");
          }}
          icon={<HomeRoundedIcon className="footer__icon" />}
        />
        <BottomNavigationAction
          label="Apps"
          value="apps"
          className="footer__button"
          onClick={() => {
            history.push("/rest");
          }}
          icon={<AppsRoundedIcon className="footer__icon" />}
        />
        {user ? (
          <BottomNavigationAction
            label="Logout"
            value="logout"
            className="footer__button"
            onClick={(e) => {
              e.preventDefault();
              signUserOutStart();
            }}
            icon={<PersonAddDisabledRoundedIcon className="footer__icon" />}
          />
        ) : (
          <BottomNavigationAction
            label="User"
            value="user"
            className="footer__button"
            onClick={() => {
              history.push("/auth");
            }}
            icon={<HowToRegRoundedIcon className="footer__icon" />}
          />
        )}

        <BottomNavigationAction
          label="Chat"
          value="chat"
          className="footer__button"
          onClick={() => {
            history.push("/chat");
          }}
          icon={<ChatBubbleOutlineRoundedIcon className="footer__icon" />}
        />
      </BottomNavigation>
    </footer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default withRouter(
  connect(mapStateToProps, { signUserOutStart })(Footer)
);
