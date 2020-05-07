import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const getActiveStyle = ({ active }) => {
  if (active) {
    return `color: var(--cl-secondary);`;
  }
  return `color: var(--cl-primary);`;
};

const sharedStyles = css`
  width: 100%;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const fadeIn = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const slideIn = css`
  @keyframes slideIn {
    0% {
      width: 0;
    }
    100% {
      width: 25rem;
    }
  }
`;

export const SidenavContainer = styled.div`
  position: fixed;
  z-index: 1150;
  width: 100vw;
  height: 100vh;
  background-color: var(--cl-shadow);
`;

export const SidenavBox = styled.div`
  ${slideIn}
  width: 25rem;
  height: 100vh;
  padding: 2rem;
  animation: slideIn 0.5s;
  background-color: var(--cl-white);
`;

export const SidenavContent = styled.div`
  ${fadeIn}
  display: grid;
  grid-row-gap: 2rem;
  justify-items: center;
  animation: fadeIn 0.5s 0.25s;
  animation-fill-mode: backwards;
`;

export const SidenavUserData = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
  justify-items: center;
`;

export const SidenavImgWrap = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const SidenavImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const SidenavName = styled.div`
  ${sharedStyles}
`;

export const SidenavEmail = styled.div`
  ${sharedStyles}
`;

export const SidenavUL = styled.ul`
  display: grid;
  grid-row-gap: 1rem;
  list-style: none;
`;

export const SidenavLI = styled.li`
  text-align: center;
`;

export const SidenavLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: 600;
    transition: color 0.3s;
    ${getActiveStyle}
  }

  &:hover,
  &:active {
    color: var(--cl-secondary);
  }
`;
