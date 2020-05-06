import styled from "styled-components";

// svg
import { ReactComponent as LinkSVG } from "../../assets/svg/tools-and-utensils.svg";

const getActiveBorder = ({ active }) => {
  if (active) {
    return `border: solid 0.1rem var(--cl-secondary);`;
  }
  return `border: solid 0.1rem var(--cl-primary);`;
};

const getActiveColor = ({ active }) => {
  if (active) {
    return `color: var(--cl-secondary)`;
  }

  return `color: var(--cl-primary)`;
};

export const ChannelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 1rem;
  ${getActiveBorder}
  ${getActiveColor}
`;

export const ChannelName = styled.div`
  grid-row: 1/2;
  font-size: 1.7rem;
`;

export const ChannelVisit = styled.div`
  cursor: pointer;
  grid-row: 1/3;
  align-self: center;
  padding: 0 1rem;
`;

export const ChannelDesc = styled.div`
  grid-row: 2/3;
`;

export const ChannelSVG = styled(LinkSVG)`
  width: 2rem;
  height: 2rem;
  transition: fill 0.3s;

  &:hover {
    fill: var(--cl-primary);
  }
`;
