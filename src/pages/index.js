import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { node } from "prop-types"

import Map from "../components/Map"
import cover from "../images/cover2.jpg"

const IndexPage = ( {data} ) => {
  const [point, setPoint] = useState(0)
  return (
  
  <Layout>
    <SEO title="Home" />
    <div
      style = {{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${cover}`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
        

      }}
    />

 
    {/* <h3>Legs</h3> */}
    <Map point={point}/>
    <button onClick={() => setPoint(point+1)}>Move</button>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return (
        <div key={node.id} >
        <Link to={node.fields.slug}>
        {node.frontmatter.title}
        </Link>
        
        </div>
      )
    })}

    

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
