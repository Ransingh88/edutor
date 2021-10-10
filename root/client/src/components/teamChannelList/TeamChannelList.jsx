import React from 'react'
import './TeamChannelList.css'

import { IoAdd } from 'react-icons/io5'
import {AddChannel} from '../assets/AddChannel'

const TeamChannelList = ({children, error= false, loading, type,isCreating,
                    setIsCreating,
                    setCreateType,
                    setIsEditing}) => {
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
                    <AddChannel
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                        setIsEditing={setIsEditing}
                        type={type === 'team' ? 'team' : 'messaging'}
                    />
                </p>
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
