import "./Header.scss";
import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="header__button"
        >
          <MenuRoundedIcon className="header__icon" />
        </IconButton>
        <Typography variant="h6" className="header__logo">
          ChatSky
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
