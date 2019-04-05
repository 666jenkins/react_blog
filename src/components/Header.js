import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className='light-blue darken-1'>
                <div className="nav-wrapper container">
                    <h5 href="#" className="brand-logo left" style={{ margin: '13px 0 16px' }}>react <small>blog</small></h5>
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