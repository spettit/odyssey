import React from "react"
import { graphql } from "gatsby"


export default ({ data }) => {
  const post = data.markdownRemark
  let newHtml = post.html
  let baseUrl = ''
  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin
  }
  
  newHtml = post.html.replace(/img src="/g, 'img src="'+baseUrl+'/')
  
  return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: newHtml }} />

        {post.frontmatter.galleryImages && post.frontmatter.galleryImages.map((image) => {
          return (
            <img src={baseUrl+'/'+image} />
          )
        })}
      </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        galleryImages
      }
    }
  }
`