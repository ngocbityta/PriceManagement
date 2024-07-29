import React from 'react'
import "./styles.css"
import { Link } from "react-router-dom";
function scrollToPosition(x) {
    window.scrollTo({
        top: x,
        behavior: 'smooth',
    });
}
const Header = () => {
    return (
        <header className="header">
            <div className='titlebar'>
                <img src='https://www.pricetrack.eu/static/images/desktop-notification@2x.png' alt="Logo Picture" className="logo"></img>
                <div className='search-bar'>
                    <input type="text" placeholder='Search your item here'></input>
                    <button type="submit">Search</button>
                </div>
                <div className='sign-log'>
                    <Link to="/signup" className='sign-log-button'>Sign up</Link>
                    <Link to="/login" className='sign-log-button'>Log in</Link>
                </div>
            </div>
            <div className='titlebar selection'>
                <Link to="/" className='category' onClick={(e) => { e.preventDefault; scrollToPosition(0) }}>Home</Link>
                <a href='/#Apple' className='category'>Apple</a>
                <a href='/#Samsung' className='category'>Samsung</a>
                <a href='/#Xiaomi' className='category'>Xiaomi</a>
                <a href='/#Oppo' className='category'>Oppo</a>
                <a href='/#Huawei' className='category'>Huawei</a>
            </div>
        </header>
    )
}
export default Header