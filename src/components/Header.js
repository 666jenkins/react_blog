import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper light-blue darken-1">
                    <h5 href="#" className="brand-logo left">react <small>blog</small></h5>
                    <ul id="nav-mobile" className="right">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/authors'>Authors</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )

}

export default Header