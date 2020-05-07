// import "./Logo.scss";
import React from "react";

// js rendering css
import {
  LogoContainer,
  LogoText,
  LogoTextLeft,
  LogoTextRight,
  LogoIconSVG,
} from "./LogoStyles";

const Logo = ({ size }) => {
  return (
    <LogoContainer>
      <LogoText size={size}>
        <LogoTextLeft size={size}>Chat</LogoTextLeft>
        <LogoTextRight>Sky</LogoTextRight>
      </LogoText>
      <LogoIconSVG size={size} />
    </LogoContainer>
  );
};

export default Logo;
