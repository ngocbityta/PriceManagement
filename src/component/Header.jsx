import React from 'react'
import "./styles.scss"
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
                <Link to="/" className="logo"><img src='https://www.pricetrack.eu/static/images/desktop-notification@2x.png' alt="Logo Picture" className="logo"></img></Link>
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
                <Link to='/list-product' className='category'>Apple</Link>
                <Link to='/list-product' className='category'>Samsung</Link>
                <Link to='/list-product' className='category'>Xiaomi</Link>
                <Link to='/list-product' className='category'>Oppo</Link>
                <Link to='/list-product' className='category'>Huawei</Link>
            </div>
        </header>
    )
}
export default Header