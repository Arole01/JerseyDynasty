import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosCart } from 'react-icons/io'
import { FaHome, FaUser } from 'react-icons/fa'
import { CartContext } from "../Pages/cartContext"
import { useContext } from 'react'
import { SearchContext } from '../Pages/searchContext'


import "./Header.css"


export const Header = () => {
    const { cart } = useContext(CartContext);
    const { searchTerm, setSearchTerm } = useContext(SearchContext)
    

    return (
        <header className='header'>
        <div className='logo'>
            <Link to="/">
      <img src="https://res.cloudinary.com/de91sxsp3/image/upload/v1768689874/CircJDLogo_riyun8.png" alt="Jersey Dynasty Logo" className="logo-img" />
    </Link>
            

                <p className='brand'>Jersey <span>Dynasty</span></p>

                <Link to={"/"} data-tooltip="Home"
                onClick={() => setSearchTerm("")}>
                <FaHome/>
                </Link>

                <Link to="/login" data-tooltip="Account" className='account'>
                    <FaUser/>
                </Link>

                <Link to="/cart" data-tooltip="Cart" className='cart-wrapper'>
                    <IoIosCart className='cart-icon' />
                    <span className='cart-count'>{cart.items.length}</span>
                </Link>
        </div>
        
        </header>
    )

    
}

export default Header