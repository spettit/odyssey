/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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

  const MainWindow = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 100px 1fr 30px;
  `

  return (
    <MainWindow>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}{" "}
        <a href="http://www.appintheclouds.com">AppInTheClouds</a>
      </footer>
    </MainWindow>
  )
}

export default Layout
