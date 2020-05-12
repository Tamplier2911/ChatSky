// import "./Logo.scss";
import React from "react";

// js rendering css
import {
  LogoContainer,
  LogoWrapper,
  LogoText,
  LogoTextLeft,
  LogoTextRight,
  LogoIconSVG,
} from "./LogoStyles";

const Logo = ({ size }) => {
  return (
    <LogoContainer>
      <LogoWrapper>
        <LogoText size={size}>
          <LogoTextLeft size={size}>Chat</LogoTextLeft>
          <LogoTextRight>Sky</LogoTextRight>
        </LogoText>
        <LogoIconSVG size={size} />
      </LogoWrapper>
    </LogoContainer>
  );
};

export default Logo;
