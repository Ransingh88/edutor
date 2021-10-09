import React, { useState } from 'react'

import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './ChatApp.css'
import 'stream-chat-react/dist/css/index.css'
import {ChannelContainer, ChannelListContainer, Auth} from '../index'

const cookies = new Cookies()
const apiKey = '4u7mp9afg9rx'
const authToken = cookies.get("token")
const client = StreamChat.getInstance(apiKey)

if (authToken) {
    client.connectUser({
        id:cookies.get('userId' ),
        name:cookies.get('username'),
        fullName:cookies.get('fullName'),
        phone:cookies.get('phone'),
        image:cookies.get('avatarURL'),
        hashedPassword:cookies.get('hashedPassword'),
        
    },authToken)
}

const ChatApp = () => {

    const [createType, setCreateType] = useState('')
    const [isCreating, setIsCreating] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    if(!authToken) return <Auth/>
    return (
        <div className="chat">
            <Chat client={client} theme="team light">
                <ChannelListContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer
                isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
        </div>
    )
}

export default ChatApp
