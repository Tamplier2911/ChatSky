import styled, { css } from "styled-components";

// svg
import { ReactComponent as LogoSVG } from "../../assets/svg/weather.svg";

const sharedTextStyles = css`
  display: inline-block;
  z-index: 5;
  margin-top: 0.5rem;
  margin-right: 1.5rem;
`;

const getTextStyle = ({ size }) => {
  if (size === "home") {
    return `font-size: 4rem;`;
  }
  return ``;
};

const getSVGStyle = ({ size }) => {
  if (size === "home") {
    return `width: 9rem; height: 9rem;`;
  }
  return ``;
};

const getTextColor = ({ size }) => {
  if (size === "home") {
    return `color: var(--cl-primary);`;
  }
  return ``;
};

export const LogoContainer = styled.div`
  display: grid;
`;

export const LogoText = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;
  position: relative;
  ${getTextStyle}
`;

export const LogoTextLeft = styled.span`
  ${sharedTextStyles}
  color: var(--cl-white);
  ${getTextColor}
`;

export const LogoTextRight = styled.span`
  ${sharedTextStyles}
  color: var(--cl-primary);
`;

export const LogoIconSVG = styled(LogoSVG)`
  grid-area: 1 / 1 / 2 / 2;
  justify-self: end;
  width: 6rem;
  height: 6rem;
  ${getSVGStyle}
`;
