import styled, { css } from "styled-components";

// svg
import { ReactComponent as PlaneSVG } from "../../assets/svg/interface.svg";

const rotate = css`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LogoPlaneContainer = styled.div`
  position: relative;
  grid-area: 1 / 1 / 2 / 2;
  //   border: 0.1rem solid var(--cl-primary);
  min-height: 30rem;
  min-width: 30rem;
  border-radius: 50%;
  animation: rotate 5s infinite linear;
  ${rotate}
`;

export const PlaneFlyingSVG = styled(PlaneSVG)`
  position: absolute;
  top: 3.2rem;
  width: 5rem;
  height: 5rem;
`;
