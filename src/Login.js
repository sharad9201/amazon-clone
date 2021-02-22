import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login"> 
            <div className="login__container">
                <h1>Sign_In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInButton">Sign In</button>

                </form>
            </div>
        </div>
    )
}

export default Login
