import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-primary">
            <div className="container">
                <Link className="navbar-brand text-light" to='/'>
                    <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="logo" />
                        Mangane
                </Link>
                <Link className="text-dark" to='/'>
                    Home
                </Link>
                <Link className="text-dark" to="/favourites">
                    Favourite
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
