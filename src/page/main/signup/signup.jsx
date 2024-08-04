import React, { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle, faC } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import "./style.scss";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Signup = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = (pwd == matchPwd);
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    return (
        <div id="wrapper">

            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <div id="title">Sign Up</div>

            <div id="signup-with-third-party">
                <a href="#" title='sign up with Google'>
                    <span className="google-image"></span>
                    <span className="signup-text">Sign up with Google</span>
                </a>
            </div>

            <div className="signup-form">
                <form action="#" method="post">

                    <label htmlFor="username">
                        Username:
                        <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validName || !user ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>

                    <input type="text" id="username" name="username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} required
                        aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} />

                    <p id="uidnote" className={userFocus && user && !validName ? 'valid' : 'hide'}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters. <br />
                        Must begin with a letter. <br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>

                    {/* ========================================================================================================================================================*/}

                    <label htmlFor="email">
                        Email:
                    </label>

                    <input type="email" id="email" name="email" required></input>

                    {/* ========================================================================================================================================================*/}

                    <label htmlFor="password">
                        Password:
                        <span className={validPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>

                    <input type="password" id="password" name="password" onChange={(e) => setPwd(e.target.value)} required
                        aria-invalid={validPwd ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} />
                    <div id='space'></div>

                    <p id="pwdnote" className={pwdFocus && !validPwd ? 'valid' : 'hide'}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters. <br />
                        Must include uppercase and lowercase letters, a number and a special character. <br />
                        Allowed special characters: <span arial-label="eclamation mark">!</span> <span aria-label="at symbol">@</span>
                        <span aria-label="hashtag">#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                    </p>

                    {/* ========================================================================================================================================================*/}

                    <label htmlFor="confirm_password">
                        Confirm Password:
                        <span className={validMatch && matchPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>

                    <input type="password" id="confirm_password" name="password" onChange={(e) => setMatchPwd(e.target.value)} required
                        aria-invalid={validMatch ? "false" : "true"} aria-describedby="matchnote" onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)} />
                    <div id='space'></div>

                    <p id="matchnote" className={matchFocus && !validMatch ? 'valid' : 'hide'}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the password input field.
                    </p>

                    {/* ========================================================================================================================================================*/}

                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div id="create-new-account">
                <h3>Already have an account?</h3>
                <div>
                    <Link to="/login" id="login-button"><button type="button">Log In</button></Link>
                </div>

            </div>
        </div>

    )
}

export default Signup;