// import "./Logo.scss";
import React from "react";

// svg
// import { ReactComponent as LogoSVG } from "../../assets/svg/weather.svg";

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
