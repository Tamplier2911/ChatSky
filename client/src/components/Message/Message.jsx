// import "./Message.scss";
import React from "react";

// mui
import Avatar from "@material-ui/core/Avatar";

// utils
import transformDateToLocaleString from "../../utils/dateToLocaleString";

// js render css
import {
  MessageContainer,
  MessageAvatarWrap,
  MessageContentWrap,
  MessageDateWrap,
  MessageName,
  MessageContent,
  MessageData,
  MessageImgWrapper,
  MessageImage,
} from "./MessageStyles";

const Message = ({
  messageContent: { content, media },
  timestamp,
  user: { displayName, photoURL, uid },
  userId,
}) => {
  const date = transformDateToLocaleString(timestamp);
  const own = userId === uid;
  return (
    <MessageContainer own={own}>
      <MessageAvatarWrap own={own}>
        <Avatar alt="happy user" src={photoURL} />
      </MessageAvatarWrap>
      <MessageContentWrap own={own}>
        <MessageName>{displayName}</MessageName>
        <MessageContent>{content}</MessageContent>
      </MessageContentWrap>
      <MessageDateWrap own={own}>
        <MessageData>{date}</MessageData>
      </MessageDateWrap>
      {media ? (
        <MessageImgWrapper>
          <MessageImage alt={displayName + ", shared media"} src={media} />
        </MessageImgWrapper>
      ) : null}
    </MessageContainer>
  );
};

export default Message;
