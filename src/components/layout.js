import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <Link className="headerStyles" to="/">
          <h2>Andrea Poulsen Photography</h2>
        </Link>
      </header>
      <ul>
        <li>
          <Link to="/wildgravity">Wild Gravity</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
