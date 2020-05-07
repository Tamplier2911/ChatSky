import styled, { css } from "styled-components";

// mui
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

// mico
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import HowToRegRoundedIcon from "@material-ui/icons/HowToRegRounded";
import PersonAddDisabledRoundedIcon from "@material-ui/icons/PersonAddDisabledRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";

const getHomeColor = ({ path }) => {
  if (path === "") {
    return `fill: var(--cl-primary) !important;`;
  }
  return ``;
};

const getChannelsColor = ({ path }) => {
  if (path === "channels") {
    return `fill: var(--cl-primary) !important;`;
  }
  return ``;
};

const getAuthColor = ({ path }) => {
  if (path === "auth") {
    return `fill: var(--cl-primary) !important;`;
  }
  return ``;
};

const getChatColor = ({ path }) => {
  if (path === "chat") {
    return `fill: var(--cl-primary) !important;`;
  }
  return ``;
};

const sharedIconStyles = css`
  padding-top: 0.2rem;
  font-size: 4rem !important;
  transition: color 0.3s !important;

  @media only screen and (max-width: 360px) {
    font-size: 3rem !important;
  }

  &:hover {
    color: var(--cl-primary);
  }
`;

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0rem;
  width: 100vw;
  grid-column: full-start / full-end;
  height: 6rem;
  box-shadow: 0rem 0rem 0.4rem var(--cl-shadow);

  & > div {
    height: 100%;
    align-content: center;
    display: flex;
    justify-content: center;
    background-color: var(--cl-white);
  }
`;

export const FooterNavHomeIcon = styled(HomeRoundedIcon)`
  ${sharedIconStyles}
  ${getHomeColor}
`;

export const FooterNavChannelsIcon = styled(AppsRoundedIcon)`
  ${sharedIconStyles}
  ${getChannelsColor}
`;

export const FooterNavAuthIcon = styled(HowToRegRoundedIcon)`
  ${sharedIconStyles}
  ${getAuthColor}
`;

export const FooterNavLogoutIcon = styled(PersonAddDisabledRoundedIcon)`
  ${sharedIconStyles}
`;

export const FooterNavChatIcon = styled(ChatBubbleOutlineRoundedIcon)`
  ${sharedIconStyles}
  ${getChatColor}
`;

export const FooterNavigation = styled(BottomNavigation)``;

export const FooterNavAction = styled(BottomNavigationAction)`
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  &:hover
    ${FooterNavHomeIcon},
    &:hover
    ${FooterNavChannelsIcon},
    &:hover
    ${FooterNavAuthIcon},
    &:hover
    ${FooterNavLogoutIcon},
    &:hover
    ${FooterNavChatIcon} {
    color: var(--cl-primary);
  }
`;
