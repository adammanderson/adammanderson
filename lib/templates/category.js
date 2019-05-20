import React from 'react'
import { Link, graphql } from 'gatsby'

function Category(props) {
  const posts = props.data.allMarkdownRemark.edges
  const { category } = props.pageContext

  return (
    <div>
      <h1>{`Posts  about ${category}`}</h1>
      <div className="tags">
        {
          posts.map(({ node }, i) => (
            <div key={i}>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
              {node.excerpt}
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default Category

export const query = graphql`
 query CategoryQuery($category: String!) {
   allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { category: { eq: $category } } }
  ) {
    edges {
      node {
        excerpt
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`
