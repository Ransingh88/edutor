import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

const cookies = new Cookies()

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    avatarURL:'',
}

const Auth = () => {
    const [isSignup, setIsSignUp] = useState(true)
    const [form,setForm] = useState(initialState)
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {fullName,username,password,phone,avatarURL} = form
        const URL = 'http://localhost:8080/authe'
        const { data:{token, userId,hashedPassword} } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
            username,password,fullName,phone,avatarURL
        })

        cookies.set('token',token)
        cookies.set('username',username)
        cookies.set('fullName',fullName)
        cookies.set('userId', userId)
        if (isSignup) {
            cookies.set('phone',phone)
        cookies.set('avatarURL',avatarURL)
        cookies.set('hashedPassword', hashedPassword)
        }
        window.location.reload()
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignup) => !prevIsSignup)
    }

     return (
        <div>
            <p>{isSignup ? "Sign Up" : "Sign In"}</p>
            <form onSubmit={handleSubmit}>
                {isSignup && (
                    <div>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required/>
                    </div>
                )}
                <div>
                        <label htmlFor="username">UserName</label>
                        <input type="text" name="username" placeholder="User Name" onChange={handleChange} required/>
                </div>
                {isSignup && (
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" placeholder="Phone no" onChange={handleChange} required/>
                    </div>
                )}
                {isSignup && (
                    <div>
                        <label htmlFor="AvatarURL">Avatar URL</label>
                        <input type="text" name="AvatarURL" placeholder="Avatar URL" onChange={handleChange} required/>
                    </div>
                )}
                <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
                </div>
                {isSignup && (
                    <div>
                        <label htmlFor="confirmPassword">confirm Password</label>
                        <input type="text" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required/>
                    </div>
                 )}
                 <div>
                     <button>{isSignup? "Sign up" : "Sign in" }</button>
                 </div>
            </form>
            <div>
                <p>
                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                    <span onClick={switchMode}>
                        {isSignup ? "Sign in" : "Sign up"}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Auth
