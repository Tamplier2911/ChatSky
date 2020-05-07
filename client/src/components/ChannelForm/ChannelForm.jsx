// import "./ChannelForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/channels/channels.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createNewChannelStart } from "../../redux/channels/channels.actions";

// js render css
import {
  ChannelFormContainer,
  ChannelFormElement,
  ChannelFormInput,
  ChannelFormButton,
} from "./ChannelFormStyles";

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
    <ChannelFormContainer>
      <ChannelFormElement autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <ChannelFormInput
          id="channel-name"
          label="Channel Name"
          required
          type="text"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        <ChannelFormInput
          id="channel-desc"
          label="Description"
          required
          type="text"
          name="desc"
          value={desc}
          onChange={(e) => onInputChange(e)}
        />
        {!isLoading ? (
          <ChannelFormButton color="primary" type="submit">
            Create
          </ChannelFormButton>
        ) : (
          <ChannelFormButton disabled>Processing...</ChannelFormButton>
        )}
      </ChannelFormElement>
    </ChannelFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { createNewChannelStart })(ChannelForm);
