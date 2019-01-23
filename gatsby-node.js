const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  category
                  featured
                }
              }
            }
          }
        }
      `)
        .then((result) => {
          if (result.errors) {
            console.log(result.errors)
            return reject(result.errors)
          }

          const posts = result.data.allMarkdownRemark.edges
          const blogTemplate = path.resolve('./src/templates/post.js')
          const categoryTemplate = path.resolve('./src/templates/category.js')

          let allCategories = []

          _.each(posts, (edge) => {
            if (_.get(edge, 'node.frontmatter.category')) {
              allCategories = allCategories.concat(edge.node.frontmatter.category)
            }
          })

          allCategories = _.uniq(allCategories)

          allCategories.forEach((category) => {
            createPage({
              path: `/${_.kebabCase(category)}/`,
              component: categoryTemplate,
              context: {
                category,
              },
            })
          })

          posts.forEach(({ node }, index) => {
            console.log(node)
            createPage({
              path: node.fields.slug,
              component: blogTemplate,
              context: {
                slug: node.fields.slug,
                prev: index === 0 ? null : posts[index - 1],
                next: index === result.length - 1 ? null : posts[index + 1],
              },
            })
          })
          return false
        }),
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    console.log(node.frontmatter.category)
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
