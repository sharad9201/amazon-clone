import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'

function Headers() {
    return (
        <nav className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>

            </div>
            <div className="header__nav">
                {/* 1st Link */}
                <Link to='/' className="header__Link">
                    <div className="header__option">
                        <span className="header__optionLineOne">hello user</span>
                        <span className="header__optionLineTwo">Sign</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to='/' className="header__Link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to='/' className="header__Link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className="header__Link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    {/* nimber of items in the basket */}
                    <span className="header_optionLineTwo header__basketCount">2</span>
                </div>
            </Link>
        </nav>
    )
}

export default Headers
