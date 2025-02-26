import React from 'react';
// simport './Navbar.css';

function Navbar (){
    return(
        <nav className="navbar">
            <ul className="navbar-list"> 
                <li className="navbar-item">
                    <a href="#Home"> Home</a>
                </li>
                <li className='navbar-list'>
                <a href="#About"> Projects</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;