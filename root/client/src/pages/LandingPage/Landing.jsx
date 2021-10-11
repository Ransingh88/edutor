import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import About from "../../components/About/About"


const Landing = () => {
    return (
        <>
        <div className="landing">
            <div className="landing__landing">
                <div className="landing__navbar">
                    <div className="landing__logo"><span>Edutor</span></div>
                    <div className="landing__menus">
                       <Link to="/about"> <p>About</p></Link>
                        <Link to="/chat"><p>Chat</p></Link>
                       <Link to="/doubt"> <p>Doubt</p> </Link>
                        <Link to="/video"><p>Video Conference</p></Link>
                        <Link to="/signup"><p>Sign Up</p></Link>
                    </div>
                </div>
                <div className="landing__container">
                    
                    <div className="landing__left">
                        <h1>Connect with <br /> your mentors</h1>
                        <p className="landing__slogan">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste aliquam debitis ad ratione. Quidem.</p>
                        <Link to="/chat"><div className="landing__getStarted">Get Started</div></Link>
                    </div>
                    <div className="landing__right">
                            <img src="./images/Despicable-Me-Characters-PNG-Picturexxxxx.png" alt=""  height="640px"/>
                    </div>
                </div>
            </div>
            <About/>
        </div>
            <Footer/>
            </>
    )
}

export default Landing
