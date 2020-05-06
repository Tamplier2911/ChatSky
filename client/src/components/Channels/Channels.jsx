// import "./Channels.scss";
import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectAllChannels,
  selectIsLoading,
} from "../../redux/channels/channels.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import { loadAllChannelsStart } from "../../redux/channels/channels.actions";

// components
import ChannelsCollection from "../ChannelsCollection/ChannelsCollection";
import WithSpinner from "../WithSpinner/WithSpinner";

// js render css
import {
  ChannelsContainer,
  NoChannels,
  NoChannelsDesc,
  NoChannelsBtn,
} from "./ChannelsStyles";

const ChannelsCollectionWithSpinner = WithSpinner(ChannelsCollection);

const Channels = ({ openModal, loadAllChannelsStart, channels, loading }) => {
  useEffect(() => {
    loadAllChannelsStart();
  }, [loadAllChannelsStart]);

  return (
    <ChannelsContainer pos={channels.length ? "top" : "center"}>
      <ChannelsCollectionWithSpinner isLoading={loading} channels={channels} />
      {!channels.length && loading === false ? (
        <NoChannels>
          <NoChannelsDesc>No channels available...</NoChannelsDesc>
        </NoChannels>
      ) : null}
      <NoChannels>
        <NoChannelsBtn
          variant="contained"
          color="primary"
          onClick={() =>
            openModal({
              title: "Create Channel",
              text: "Please, enter channel name and description.",
              child: "channel-form",
            })
          }
        >
          Create New Channel
        </NoChannelsBtn>
      </NoChannels>
    </ChannelsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  channels: selectAllChannels,
  loading: selectIsLoading,
});

export default connect(mapStateToProps, { openModal, loadAllChannelsStart })(
  Channels
);
