import React from "react";
import { Link } from "react-router-dom";
import "./HeaderDropdown.css"; 

const HeaderDropdown = ({ closeMenu }) => {
    return (
    <nav className="dropdown-menu">
        <Link to="/club-jersey" onClick={closeMenu}>Club Jersey</Link>
        <Link to="/retro-jersey" onClick={closeMenu}>Retro Jerseys</Link>
        <Link to="/country-jersey" onClick={closeMenu}>Country Jersey</Link>
        <Link to="/kids-jersey" onClick={closeMenu}>Kids Jersey</Link>
        <Link to="/baseball-jersey" onClick={closeMenu}>Baseball Jerseys</Link>
        <Link to="/basketball-jersey" onClick={closeMenu}>Basketball Jerseys</Link>
        <Link to="/shop-all" onClick={closeMenu}>Shop All</Link>

    </nav>
    );
};

export default HeaderDropdown;
