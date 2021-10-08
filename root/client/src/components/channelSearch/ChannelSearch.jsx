import React, { useState } from 'react'
import './ChannelSearch.css'
import { useChatContext } from 'stream-chat-react'
import {IoSearch} from 'react-icons/io5'

const ChannelSearch = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const getChannels = async (text) => {
    try {
        //todo
    } catch (error) {
        setQuery('')
    }
}

    const onSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)
        setQuery(e.target.value)
        getChannels(e.target.value)

    }
    return (
        <div className="channelSearch">
            <div className="channelSearch__inputSearch">
                <IoSearch/>
                <input type="text" placeholder="Search" onChange={onSubmit} value={query} />
            </div>
        </div>
    )
}

export default ChannelSearch
