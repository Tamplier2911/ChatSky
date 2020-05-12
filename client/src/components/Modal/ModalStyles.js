import styled, { css } from "styled-components";

const hopInAnimation = css`
  @keyframes hopIn {
    0% {
      opacity: 0;
      transform: translate(0%, -100px) rotateX(80deg);
    }
    100% {
      opacity: 1;
      transform: translate(0%, 0px) rotateX(0deg);
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background-color: var(--cl-shadow);

  perspective: 1000px;
`;

export const ModalContent = styled.div`
  ${hopInAnimation}
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;
  min-height: 25rem;
  min-width: 40rem;
  padding: 2rem;
  background-color: var(--cl-white);
  box-shadow: 0rem 0.2rem 0.6rem var(--cl-shadow);

  animation: 0.3s hopIn;
  animation-fill-mode: backwards;

  @media only screen and (max-width: 325px) {
    min-height: 25rem;
    min-width: 30rem;
  }
`;

export const ModalClose = styled.span`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.8rem;
  transition: color 0.3s;

  &:hover {
    color: var(--cl-shadow);
  }
`;

export const ModalTitle = styled.h3`
  display: grid;
  grid-row-gap: 1rem;
  font-size: 2.5rem;
  font-weight: 400;

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 0.1rem;
    background-color: var(--cl-font);
  }
`;

export const ModalText = styled.p`
  font-size: 1.6rem;
`;
