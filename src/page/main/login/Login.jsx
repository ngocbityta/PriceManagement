import React from 'react'
import "./style.css"

function Login() {
    return (
        <div id="Login">
            <div id="login-header">Log In</div>
            <div id="login-with-email">
                Login with Email
                <div id="email-input-wrapper">
                    <div id="email-text" class="login-with-email-text">Email</div>
                    <input type="email" name="Email" id="email-input" />
                </div>
                <div id="password-input-wrapper">
                    <div id="password-text" class="login-with-email-text">Password</div>
                    <input type="password" name="Password" id="password-input" />
                </div>

            </div>
        </div>
    )
}

export default Login;