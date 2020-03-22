import { Link } from "gatsby"
import React from "react"
import sea from '../images/sea.jpg'


const Header = ({ siteTitle }) => (
  <header
    style={{
      // backgroundColor: `#20232A`,
      // backgroundImage: `url(${sea})`,
      // backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        position: "fixed",
        // backgroundColor: 'black',
        // opacity: '0.7'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'Miltonian Tattoo',
            color: `#4E1E17`,
            fontSize: '5rem',
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
