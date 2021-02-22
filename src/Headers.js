import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import {Link} from 'react-router-dom'

function Headers() {
    return (
        <nav className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>

            </div>
            <Link to='/' className="header__Link">
                <div className="header__option">
                    <span className="header__optionLineOne">hello user</span>
                    <span className="header__optionLineTwo">Sign In or Sign Up</span>
                </div>
            </Link>
        </nav>
    )
}

export default Headers
