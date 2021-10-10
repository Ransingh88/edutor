import React, { useState} from "react";
import "./ChannelListContainer.css";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "../index";
import { IoLogOut, IoHome } from "react-icons/io5";
import '../../App.css'

const cookies = new Cookies()

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}


const ChannelListContent  = ({isCreating,
                    setIsCreating,
                    setCreateType,
  setIsEditing }) => {
  
  const { client } = useChatContext(); 

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
  const filters = { members: { $in: [client.userID] } };

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
                filters={filters}
                  channelRenderFilterFn={()=>{}}
                  List={(listProps) => (
                      <TeamChannelList
                          {...listProps}
                      type="team"
                      isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
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
                filters={filters}
                  channelRenderFilterFn={customChannelMessagingFilter}
                  List={(listProps) => (
                      <TeamChannelList
                          {...listProps}
                      type="messaging"
                      isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
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

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(true);

    return (
        <>
            <div className="channel-list__container">
              <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing} 
              />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
            </div>
        </>
    )

}

export default ChannelListContainer;
