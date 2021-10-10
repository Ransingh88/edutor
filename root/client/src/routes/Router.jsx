import React from 'react'
import { Switch, Route } from 'react-router'
import { ChatApp } from '../components'
import { ContextProvider } from '../components/SocketContext'
import VideoChat from '../components/Video/VideoChat'
import Landing from '../pages/LandingPage/Landing'
import Login from '../components/Login/Login'
import Sign from '../components/Sign/Sign'
import About from '../components/About/About'
  
const Router = () => {
    return (
        <div>
            <Switch >
                <Route path="/" exact>
                        <Landing/>
                </Route>
                 <Route path="/about">
                        <About/>
                </Route>
                <Route path="/chat">
                        <ChatApp/>
                </Route>
                <Route path="/poll">
                        <ChatApp/>
                </Route>
                <Route path="/video">
                    <ContextProvider>
                    <VideoChat />
                    </ContextProvider>
                </Route>
                <Route path="/login">
                        <Login/>
                </Route>
                <Route path="/signup">
                        <Sign/>
                </Route>
                
            </Switch>
            
            
        </div>
    )
}

export default Router
