import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from '../assets/images/sabineDotSewingLogo.jpg'

var logoStyle = {
    width: 75,
    height: 75,
    borderRadius: '25%'
}

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img style={logoStyle} alt="fks" src={logo} /></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
