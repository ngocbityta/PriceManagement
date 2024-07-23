import React from 'react'
import "./styles.css"
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
                    <a className='sign-log-button'>Sign in</a>
                    <a className='sign-log-button'>Log in</a>
                </div>
            </div>
            <div className='titlebar selection'>
                <a className='category'>Apple</a>
                <a className='category'>Samsung</a>
                <a className='category'>Xiaomi</a>
                <a className='category'>Oppo</a>
                <a className='category'>Blackberry</a>
            </div>
        </header>
    )
}

export default Header