import React from 'react'
import { Link, graphql } from 'gatsby'

import Slider from '../components/slider'

const IndexPage = (props) => {
  const featuredPosts = props.data.allMarkdownRemark.edges
  const slides = featuredPosts.map(post => ({
    title: post.node.frontmatter.title,
    category: post.node.frontmatter.category,
    date: post.node.frontmatter.date,
    image: post.node.frontmatter.image,
    excerpt: post.node.excerpt,
    slug: post.node.fields.slug,
  }))

  return (
    <div>
      <Slider
        slides={slides}
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
 query FeaturedQuery {
   allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { featured: { eq: true } } }
  ) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          category
          date
          image
        }
        fields {
          slug
        }
      }
    }
  }
}
`
