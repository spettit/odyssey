import { Link } from "gatsby"
import React from "react"
import sea from '../images/odyssey.jpg'


const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#73562B`,
      backgroundImage: `url(${sea})`,
      backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'miltonian',
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)



export default Header
