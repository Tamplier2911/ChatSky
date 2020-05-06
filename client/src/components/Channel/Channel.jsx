// import "./Channel.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentChannel } from "../../redux/channels/channels.selectors";
import { setCurrentChannel } from "../../redux/channels/channels.actions";

// js render css
import {
  ChannelContainer,
  ChannelName,
  ChannelVisit,
  ChannelDesc,
  ChannelSVG,
} from "./ChannelStyles";

const Channel = ({ channel, setCurrentChannel, currentChannel }) => {
  const { name, description, createdBy } = channel;
  const active = channel.id === currentChannel.id;
  return (
    <ChannelContainer active={active}>
      <ChannelName>{name}</ChannelName>
      <ChannelVisit>
        <ChannelSVG onClick={() => setCurrentChannel(channel)} />
      </ChannelVisit>
      <ChannelDesc>{description}</ChannelDesc>
    </ChannelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentChannel: selectCurrentChannel,
});

export default connect(mapStateToProps, { setCurrentChannel })(Channel);
