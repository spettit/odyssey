import React from "react"
import { LoadScript } from '@react-google-maps/api'

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import MainMap from "../components/MainMap"

const IndexPage = ( {data} ) => {
  
  return (
  
  <Layout>
    <SEO title="Home" />
    
    <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAov8VpvRFBsCiFsB8pZIMa4P2NEP0qwcU"
      >
        <MainMap />
      </LoadScript>
    </Layout>
)
  }

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(filter: {fields: {slug: {glob: "/leg/*"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
export default IndexPage
