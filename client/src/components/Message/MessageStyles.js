import styled, { css } from "styled-components";

const sharedStyles = css`
  display: grid;
  word-break: break-word;
`;

const getOwnContainer = ({ own }) => {
  if (own) {
    return `grid-template-columns: min-content 1fr;`;
  }
  return `grid-template-columns: 1fr min-content;`;
};

const getOwnAvatar = ({ own }) => {
  if (own) {
    return `grid-area: 1 / 1 / 3 / 2;`;
  }
  return `grid-area: 1 / 2 / 3 / 3;`;
};

const getOwnContent = ({ own }) => {
  if (own) {
    return `grid-area: 1 / 2 / 2 / 3;`;
  }
  return `grid-area: 1 / 1 / 2 / 2; text-align: right;`;
};

const getOwnDate = ({ own }) => {
  if (own) {
    return `grid-area: 2 / 2 / 3 / 3;`;
  }
  return `grid-area: 2 / 1 / 3 / 2; text-align: right;`;
};

export const MessageContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-column-gap: 2rem;
  ${getOwnContainer}
`;

export const MessageAvatarWrap = styled.div`
  display: grid;
  align-self: center;
  ${getOwnAvatar}
`;

export const MessageContentWrap = styled.div`
  display: grid;
  ${getOwnContent}
`;

export const MessageDateWrap = styled.div`
  display: grid;
  ${getOwnDate}
`;

export const MessageName = styled.div`
  ${sharedStyles}
  font-size: 1.8rem;
  font-weight: 600;
`;

export const MessageContent = styled.div`
  ${sharedStyles}
`;

export const MessageData = styled.div`
  display: grid;
  font-size: 1.2rem;
  color: var(--cl-grey);
`;

export const MessageImgWrapper = styled.div`
  justify-self: center;
  grid-area: 3 / 1 / 4 / 3;
  overflow: hidden;
  padding-top: 1rem;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const MessageImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 0.8rem;
`;
