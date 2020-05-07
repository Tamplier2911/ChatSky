import styled from "styled-components";

export const AuthPageContainer = styled.section`
  min-height: calc(100vh - 6rem - 6rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  align-content: center;

  padding: 2rem 0rem 8rem 0rem;

  grid-column-gap: 4rem;
  grid-row-gap: 6rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
