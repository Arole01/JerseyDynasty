import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosCart } from 'react-icons/io'
import { FaHome, FaUser, FaBars } from 'react-icons/fa'
import { CartContext } from "../Pages/cartContext"
import { useContext, useState } from 'react'
import { AppContext } from '../Pages/authContext'
import ReactTooltip from 'react-tooltip'
import HeaderDropdown from './HeaderDropdown'
import "./Header.css"


export const Header = () => {
    const { cart } = useContext(CartContext);
    const { user, logout } = useContext(AppContext);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className='header'>
        <div className='logo'>
            <FaBars className='menu-icon' onClick={() => setOpenMenu(!openMenu)} />

                <p className='brand'>Jersey <span>Dynasty</span></p>

                <Link to={"/"} data-tooltip="Home"><FaHome/>
                </Link>

                <Link to="/login" data-tooltip="Account" className='account'>
                    <FaUser/>
                </Link>

                <Link to="/cart" data-tooltip="Cart" className='cart-wrapper'>
                    <IoIosCart className='cart-icon' />
                    <span className='cart-count'>{cart.items.length}</span>
                </Link>
        </div>
        <div className="search-bar"> <input type="text" placeholder="Search for products, teams, or jerseys..." /> <button type="submit">Search</button> 
        </div>
        {openMenu && <HeaderDropdown closeMenu={()=> setOpenMenu(false)}/>}
        </header>
    )
}

export default Header