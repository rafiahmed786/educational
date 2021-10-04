import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo-01.png'

const Header = () => {
    return (
        <div className="Header-container">
            <div>
                <img src={logo} alt="" width="250px" />
            </div>
            <div className="nav">
                <NavLink className="navlink" to='/Home'>Home</NavLink>
                <NavLink className="navlink" to='/course'>Course</NavLink>
                <NavLink className="navlink" to='/about'>About</NavLink>
                <NavLink className="navlink" to='/Instructor'>Become A Trainer</NavLink>
            </div>
        </div>
    );
};

export default Header;