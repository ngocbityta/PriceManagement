import React from 'react';
import "./style.css";

function Login() {
    return (
        <div id="wrapper">
            <div id="title">Log In</div>
            <div id="login-with-third-party">
                <a href="#" title='Login with Google'>
                    <span class="google-image"></span>
                    <span class="login-text">Login with Google</span>
                </a>
            </div>
            <div class="login-form">
                <h2>Login with Email</h2>
                <form action="#" method="post">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                    <div id='space'></div>


                    <button type="submit">Log In</button>
                </form>
                <div id="forgot-password">
                    <a href="#" >Forgot Password?</a>
                </div>
            </div>

            <div id="create-new-account">
                <h3>New to PriceTrack?</h3>
                <button type="button" href="#">Create New Account</button>
            </div>
        </div>

    )
}

export default Login;