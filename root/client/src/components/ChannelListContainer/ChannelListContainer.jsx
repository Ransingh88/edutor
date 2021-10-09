import React from "react";
import "./ChannelListContainer.css";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "../index";
import { IoLogOut, IoHome } from "react-icons/io5";

const cookies = new Cookies()


const ChannelListContainer = () => {

  const logout = () => {
    cookies.remove("token");
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('phone');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    window.location.reload()
}

  return (
    <div className="channelList">
      <div className="channelList__sidebar">
        <div className="channelList_sidebar_icon">
          <IoHome />
        </div>
        <div className="channelList_sidebar_icon" onClick={logout}>
          <IoLogOut />
        </div>
          </div>
          <div className="channelList__header">
              <p className="channelList__logoName">Edutor</p>
              <ChannelSearch />
              <ChannelList
                filters={{}}
                  channelRenderFilterFn={()=>{} }
                  List={(listProp) => (
                      <TeamChannelList
                          {...listProp}
                          type="team"
                      />
                  )}
                  Preview={(previewProps) => (
                      <TeamChannelPreview
                          {...previewProps}
                          type="team"
                      />
                  )}
              />
              <ChannelList
                filters={{}}
                  channelRenderFilterFn={()=>{} }
                  List={(listProp) => (
                      <TeamChannelList
                          {...listProp}
                          type="messaging"
                      />
                  )}
                  Preview={(previewProps) => (
                      <messagingChannelPreview
                          {...previewProps}
                          type="messaging"
                      />
                  )}
              />
          </div>
    </div>
  );
};

export default ChannelListContainer;
