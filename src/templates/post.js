import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container } from 'reactstrap'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title, date } = post.frontmatter
  const { prev, next } = props.pageContext

  return (
    <Container>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {prev && (
        <Link to={prev.node.fields.slug}>
          {prev.node.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.node.fields.slug}>
          {next.node.frontmatter.title}
        </Link>
      )}
    </Container>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        excerpt
        frontmatter {
            title
        }
    }
}`
