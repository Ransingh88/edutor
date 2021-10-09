import React from 'react'

import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './ChatApp.css'
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
    if(!authToken) return <Auth/>
    return (
        <div className="chat">
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer/>
            </Chat>
        </div>
    )
}

export default ChatApp
