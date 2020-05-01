/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import SideBar from "./SideBar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          
        }}
      >
        <SideBar />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
          {' '}<a href="http://www.appintheclouds.com">AppInTheClouds</a>
        </footer>
      </div>
    </>
  )
}



export default Layout
