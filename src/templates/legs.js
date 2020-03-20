import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  // const newHtml = post.html.replace(/img src="/g, 'img src="https://caribbean-odyssey.netlify.com/')
  const newHtml = post.html.replace(/img src="/g, 'img src="'+window.location.origin+'/')
  return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: newHtml }} />
      </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`