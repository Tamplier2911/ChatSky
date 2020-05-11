// import "./Channel.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentChannel } from "../../redux/channels/channels.selectors";
import {
  setCurrentChannel,
  deleteOneChannelStart,
} from "../../redux/channels/channels.actions";

// js render css
import {
  ChannelContainer,
  ChannelName,
  ChannelVisit,
  ChannelDelete,
  ChannelDesc,
  ChannelSVG,
  ChannelDelSVG,
} from "./ChannelStyles";

const Channel = ({
  channel,
  setCurrentChannel,
  currentChannel,
  deleteOneChannelStart,
  history,
}) => {
  const { name, description } = channel; // createdBy desctuct
  const active = channel.id === currentChannel.id;
  return (
    <ChannelContainer active={active}>
      <ChannelDelete>
        <ChannelDelSVG onClick={() => deleteOneChannelStart(channel.id)} />
      </ChannelDelete>
      <ChannelName>{name}</ChannelName>
      <ChannelVisit>
        <ChannelSVG
          onClick={() => {
            setCurrentChannel(channel);
            history.push("/chat");
          }}
        />
      </ChannelVisit>
      <ChannelDesc>{description}</ChannelDesc>
    </ChannelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentChannel: selectCurrentChannel,
});

export default withRouter(
  connect(mapStateToProps, { setCurrentChannel, deleteOneChannelStart })(
    Channel
  )
);
