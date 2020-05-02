import "./Footer.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// mui
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

// mico
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import HowToRegRoundedIcon from "@material-ui/icons/HowToRegRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";

const Footer = ({ history }) => {
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
          icon={<AppsRoundedIcon className="footer__icon" />}
        />
        <BottomNavigationAction
          label="User"
          value="user"
          className="footer__button"
          onClick={() => {
            history.push("/auth");
          }}
          icon={<HowToRegRoundedIcon className="footer__icon" />}
        />
        <BottomNavigationAction
          label="Chat"
          value="chat"
          className="footer__button"
          icon={<ChatBubbleOutlineRoundedIcon className="footer__icon" />}
        />
      </BottomNavigation>
    </footer>
  );
};

export default withRouter(Footer);
