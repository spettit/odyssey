import { Link } from "gatsby"
import React from "react"


const Header = ({ siteTitle }) => (
  <header>
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'Miltonian Tattoo',
            color: `#4E1E17`,
            fontSize: '4rem',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h4>
  </header>
)



export default Header
