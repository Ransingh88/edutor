import React from 'react'
import './TeamChannelList.css'

import {IoAdd} from 'react-icons/io5'

const TeamChannelList = ({children, error= false, loading, type}) => {
    if (error) {
        return (type === 'team' ? (
            <div className="teamChannelList">
                <p className="teamChannelList__message">
                    Connection error, Please wait a moment and try again.
                </p>
            </div>
        ) : null)
    }

    if(loading) {
        return (
            <div className="teamChannelList">
                <p className="teamChannelList__message">
                    {type === "team" ? "Channels" : "Messages"} Loading...
                </p>
            </div>
        )
        
    }
    return (
        <div className="teamChannelList">
            <div className="teamChannelList_header">
                <p className="teamChannelList__title">
                    {type === "team" ? "Channels" : "Direct Messages"}
                    {/* button Add channel */}
                </p>
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
