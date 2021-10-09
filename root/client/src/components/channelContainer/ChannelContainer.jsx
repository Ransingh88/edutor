import React from 'react'
import {Channel, useChatContext} from 'stream-chat-react'
import {ChannelInner, CreateChannel, EditChannel, TeamMessage} from '../index'

const ChannelContainer = ({
    isCreating,
setIsCreating,
isEditing,
setIsEditing,
createType}) => {
    const { channel } = useChatContext();

    if (isCreating) {
        return (
            <div className="channelContainer">
                <CreateChannel createType={createType} setIsCreating={ setIsCreating}/>
            </div>
        )
    }

    if (isEditing) {
        return (
            <div className="channelContainer">
                <EditChannel setIsEditing={ setIsEditing}/>
            </div>
        )
    }

    const EmptyState = () => {
        
            <div className="channelEmpty__container">
                <p className="channelEmpty__first">This is your biggining of your chat history</p>
                <p className="channelEmpty__second">Send messages, attachments, links, emojis and more!</p>
            </div>
        
    }


    return (
        <div className="channelContainer">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <TeamMessage key={i}{...messageProps}/>}
            >
                <ChannelInner setIsEditing={ setIsEditing}/>
            </Channel>
        </div>
    )
}

export default ChannelContainer
