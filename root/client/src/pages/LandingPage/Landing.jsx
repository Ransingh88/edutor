import React from 'react'
import './Landing.css'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__landing">
                <div className="landing__navbar">
                    <div className="landing__logo"><span>Edutor</span></div>
                    <div className="landing__menus">
                        <p>About</p>
                        <p>Chat</p>
                        <p>Doubt</p>
                        <p>Contact</p>
                        <p>Login</p>
                    </div>
                </div>
                <div className="landing__container">
                    
                    <div className="landing__left">
                        <h1>Connect with <br /> your mentors</h1>
                        <p className="landing__slogan">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste aliquam debitis ad ratione. Quidem.</p>
                        <div className="landing__getStarted">Get Started</div>
                    </div>
                    <div className="landing__right">
                            <img src="./images/Despicable-Me-Characters-PNG-Picturexxxxx.png" alt=""  height="640px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
