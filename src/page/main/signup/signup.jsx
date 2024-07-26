import React from 'react';
import "./style.css";

function Signup() {
    return (
        <div id="wrapper">
            <div id="title">Sign Up</div>
            <div id="signup-with-third-party">
                <a href="#" title='sign up with Google'>
                    <span class="google-image"></span>
                    <span class="signup-text">Sign up with Google</span>
                </a>
            </div>
            <div class="signup-form">
                <form action="#" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                    <div id='space'></div>
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div id="create-new-account">
                <h3>Already have an account?</h3>
                <div id="login-button">
                    <button type="button" href="#">Log In</button>
                </div>

            </div>
        </div>

    )
}

export default Signup;