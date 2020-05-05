import "./Channels.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { openModal } from "../../redux/modal/modal.actions";

// mui
import { Button } from "@material-ui/core";

// svg
import { ReactComponent as LinkSVG } from "../../assets/svg/tools-and-utensils.svg";

const Channels = ({ openModal }) => {
  let channelList = [
    { name: "Channelissimo", desc: "Channel about channels..." },
    { name: "Channelissimo", desc: "Channel about channels..." },
    { name: "Channelissimo", desc: "Channel about channels..." },
  ];
  channelList = [];
  return (
    <div className="channel">
      <div className="channel__collection">
        {channelList.length ? (
          channelList.map((channel, i) => {
            const { name, desc } = channel;
            return (
              <div key={name + i} className="channel__container">
                <div className="channel__name">{name}</div>
                <div className="channel__visit">
                  <LinkSVG className="channel__visit--svg" />
                </div>
                <div className="channel__desc">{desc}</div>
              </div>
            );
          })
        ) : (
          <div className="channel__nochannels">
            <div className="channel__nochannels--desc">
              No channels available...
            </div>
            <Button
              variant="contained"
              color="primary"
              className="channel__nochannels--btn"
              onClick={() =>
                openModal({
                  title: "Create Channel",
                  text: "Please, enter channel name and description.",
                  child: "channel-form",
                })
              }
            >
              Create New Channel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(null, { openModal })(Channels);
