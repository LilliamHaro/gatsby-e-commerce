import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header_icon">
    OAZI</div>

    <div className="header_options_container">
      <ul className="header_sections">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/page-2/">Productos</Link>
        </li>
        <li>
          <Link to="/page-2/">Rituales</Link>
        </li>
        <li>
          <Link to="/page-2/">Novedades</Link>
        </li>
        <li>
          <Link to="/page-2/">Mundo OAZI</Link>
        </li>  
      </ul>
      <ul className="header_functions">
        <li><i className="fas fa-shopping-cart"></i></li>
        <li><i className="fas fa-search"></i></li>
        <li>SAYRI</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
