import React from "react";
import "./ChannelListContainer.css";
import { ChannelList, useChatContext } from "stream-chat-react";
import cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "../index";
import { IoLogOut, IoHome } from "react-icons/io5";

const ChannelListContainer = () => {
  return (
    <div className="channelList">
      <div className="channelList__sidebar">
        <div className="channelList_sidebar_icon">
          <IoHome />
        </div>
        <div className="channelList_sidebar_icon">
          <IoLogOut />
        </div>
          </div>
          <div className="channelList__header">
              <p className="channelList__logoName">Edutor</p>
          </div>
    </div>
  );
};

export default ChannelListContainer;
