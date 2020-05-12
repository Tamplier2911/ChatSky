import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns:
    [full-start]
    minmax(2rem, 1fr)
    [center-start] repeat(
      10,
      [col-start] minmax(min-content, 11.7rem) [col-end]
    )
    [center-end]
    minmax(2rem, 1fr)
    [full-end];

  @media only screen and (max-width: 26.563em) {
    grid-template-columns:
      [full-start]
      minmax(2rem, 1fr)
      [center-start] repeat(
        10,
        [col-start] minmax(min-content, 11.7rem) [col-end]
      )
      [center-end]
      minmax(2rem, 1fr)
      [full-end];
  }
`;

export const AppMain = styled.main`
  display: grid;
  // align-items: center;
  grid-column: center-start / center-end;
  min-height: calc(100vh - 6rem - 6rem);
`;
