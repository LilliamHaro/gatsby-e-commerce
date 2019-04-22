import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="all-container">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            <div className="footer-container">
              <div>Derechos Reservados blah blah</div>
              <div>
                © {new Date().getFullYear()}, copyright blah blah{` `}
              </div>

            </div>

          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
