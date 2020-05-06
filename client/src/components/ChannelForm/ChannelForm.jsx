import "./ChannelForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/channels/channels.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createNewChannelStart } from "../../redux/channels/channels.actions";

// mui
import { TextField, Button } from "@material-ui/core";

const ChannelForm = ({ isLoading, createNewChannelStart, user }) => {
  const [channelData, setChannelData] = useState({ name: "", desc: "" });
  const { name, desc } = channelData;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setChannelData({ ...channelData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createNewChannelStart({ channelData, user });
    setChannelData({ name: "", desc: "" });
  };

  return (
    <div className="channelForm">
      <form
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
        className="channelForm__form"
      >
        <TextField
          id="channel-name"
          label="Channel Name"
          required
          type="text"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          className="channelForm__input"
        />
        <TextField
          id="channel-desc"
          label="Description"
          required
          type="text"
          name="desc"
          value={desc}
          onChange={(e) => onInputChange(e)}
          className="channelForm__input"
        />
        {!isLoading ? (
          <Button color="primary" className="channelForm__btn" type="submit">
            Create
          </Button>
        ) : (
          <Button disabled className="channelForm__btn">
            Processing...
          </Button>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { createNewChannelStart })(ChannelForm);
