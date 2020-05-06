import styled from "styled-components";

// mui
import { Button } from "@material-ui/core";

const getPositioning = ({ pos }) => {
  if (pos === "top") {
    return ``;
  }
  return `grid-auto-rows: min-content;
          align-content: center;`;
};

export const ChannelsContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;
  ${getPositioning}
`;

export const NoChannels = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  justify-items: center;
`;

export const NoChannelsDesc = styled.div``;

export const NoChannelsBtn = styled(Button)`
  font-size: 1.4rem !important;
`;
