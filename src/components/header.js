import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "./header.css"

// const Header = ({ siteTitle }) => (
//   <header>
//     <div className="header_icon">
//     OAZI</div>

//     <div className="header_options_container">
//       <ul className="header_sections">
//         <li>
//           <Link to="/">Inicio</Link>
//         </li>
//         <li>
//           <Link to="/productos/">Productos</Link>
//         </li>
//         <li className="header_products_option">
//         <span>
//           Dropdown
//         </span>
//         <div className="header_products_menu">
//           <span>asdasd</span>
//           <span>asdasd</span>
//           <span>asdasd</span>
//         </div>
//       </li>
//         <li>
//           <Link to="/page-2/">Novedades</Link>
//         </li>
//         <li>
//           <Link to="/page-2/">Mundo OAZI</Link>
//         </li>
//       </ul>
//       <ul className="header_functions">
//         <li><i className="fas fa-shopping-cart"></i></li>
//         <li><i className="fas fa-search"></i></li>
//         <li>SAYRI</li>
//       </ul>
//     </div>
//   </header>
// )

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productsMenu: false,
    }
    this.toggleProductsMenu = this.toggleProductsMenu.bind(this)
  }
  toggleProductsMenu() {
    this.setState({
      productsMenu: !this.state.productsMenu,
    })
  }
  render() {
    const { productsMenu } = this.state
    return (
      <header>
        <div className="header_icon">OAZI</div>

        <div className="header_options_container">
          <ul className="header_sections">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li
              onClick={this.toggleProductsMenu}
              className="header_products_option"
            >
              <span>Productos</span>
              {productsMenu ? (
                <div
                  onClick={this.toggleProductsMenu}
                  className="header_products_menu"
                >
                  <div className="header_products_menu_option">
                    <Link to="/productos">Productos</Link>
                  </div>
                  <div className="header_products_menu_option">
                    <Link to="/productos/zona-holistica">Zona Holística</Link>
                  </div>
                  <div className="header_products_menu_option">
                    <Link to="/productos/zona-pureza">Zona Pureza</Link>
                  </div>
                  <div className="header_products_menu_option">
                    <Link to="/productos/zona-tonificante">
                      Zona Tonificante
                    </Link>
                  </div>
                </div>
              ) : null}
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
            <li>
              <i className="fas fa-shopping-cart" />
            </li>
            <li>
              <i className="fas fa-search" />
            </li>
            <li>SAYRI</li>
          </ul>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
