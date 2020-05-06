import "./Header.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";

// components
import Logo from "../Logo/Logo";

// mui
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Header = ({ toggleSidenav }) => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="header__button"
          onClick={() => toggleSidenav()}
        >
          <MenuRoundedIcon className="header__icon" />
        </IconButton>
        <Typography variant="h6" className="header__logo">
          <Logo />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, { toggleSidenav })(Header);
