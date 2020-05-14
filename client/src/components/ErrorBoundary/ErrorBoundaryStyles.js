import styled from "styled-components";

// svg
import { ReactComponent as ErrorSVG } from "../../assets/svg/error.svg";

export const ErrorBoundaryContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const ErrorBoundaryMessage = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-auto-rows: min-content;
  align-items: center;
  grid-column-gap: 2rem;
`;

export const ErrorBoundaryHeader = styled.h4`
  grid-area: 1 / 2 / 2 / 3;
  font-size: 2rem;
`;

export const ErrorBoundaryText = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  font-size: 1.8rem;
`;

export const ErrorBoundarySVG = styled(ErrorSVG)`
  grid-area: 1 / 1 / 3 / 2;
  width: 4rem;
  height: 4rem;
`;
