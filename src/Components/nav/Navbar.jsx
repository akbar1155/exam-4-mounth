import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink className='nav__item-link' to='/'>Home</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__item-link' to='/user'>Users</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__item-link' to='/product'>Product</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__item-link' to='#'>Statistics</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__item-link' to='#'>Inbox</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
