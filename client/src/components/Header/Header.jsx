// import "./Header.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";

// components
import Logo from "../Logo/Logo";

// js render css
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavButton,
  HeaderMenuIcon,
  HeaderText,
} from "./HeaderStyles";

const Header = ({ toggleSidenav }) => {
  return (
    <HeaderContainer position="static">
      <HeaderContent>
        <HeaderNavButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleSidenav()}
        >
          <HeaderMenuIcon />
        </HeaderNavButton>
        <HeaderText variant="h6">
          <Logo />
        </HeaderText>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default connect(null, { toggleSidenav })(Header);
