import styled from "styled-components";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

// mui
import { TextField } from "@material-ui/core";

const getFillColot = ({ toggled }) => {
  if (toggled) return `fill: var(--cl-secondary) !important;`;
  return `fill: var(--cl-primary) !important;`;
};

const getSearchBarShown = ({ toggled }) => {
  if (toggled) return `transform: translate(0%, 0%);`;
  return `transform: translate(100%, 0%);`;
};

const getButtonPosition = ({ toggled }) => {
  if (toggled) return `transform: translate(0%, 6.5rem);`;
  return `transform: translate(0%, 0%);`;
};

export const MessagesContainer = styled.div`
  display: grid;
  padding-bottom: 8rem;
`;

export const MessagesSearchSVG = styled(SearchRoundedIcon)`
  width: 4rem !important;
  height: 4rem !important;
  transition: transform 0.3s !important;
  ${getFillColot}
`;

export const MessagesSearchButton = styled.div`
  ${getButtonPosition}
  cursor: pointer;
  z-index: 25;
  position: fixed;
  display: grid;
  align-items: center;
  padding: 0.2rem;
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  right: 0rem;
  top: 7.5rem;
  box-shadow: 0rem 0.2rem 0.4rem var(--cl-shadow);
  background-color: var(--cl-white);
  transition: padding 0.3s, transform 0.3s;

  &:hover ${MessagesSearchSVG} {
    transform: scale(1.1);
  }
`;

export const MessagesSearchContainer = styled.div`
  position: fixed;
  top: 6rem;
  right: 0rem;
  display: grid;
  width: 100vw;
  height: 8rem;
  background-color: transparent;
  z-index: 25;
  ${getSearchBarShown}
  transition: transform .3s;
`;

export const MessageSearchForm = styled.form`
  display: grid;
  align-items: center;
  padding: 0 5rem;
`;

export const MessageSearchInput = styled(TextField)`
  width: 100% !important;

  & label {
    font-size: 1.4rem;
  }
`;
