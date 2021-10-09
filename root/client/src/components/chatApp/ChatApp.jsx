import React from 'react'

import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './ChatApp.css'
import {ChannelContainer, ChannelListContainer, Auth} from '../index'

const apiKey = 's4utbz34g9mb'
const client = StreamChat.getInstance(apiKey)
const authToken = false

const ChatApp = () => {
    if(authToken) return <Auth/>
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
