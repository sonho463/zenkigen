const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        // const portfolioUnderContentTemplate = path.resolve("./src/templates/portfolioUnderContent.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== INTERVIEW ====
      .then(() => {
        graphql(
          `
           {
              allWordpressWpInterview {
                edges {
                  node {
                    acf {
                      detail_cat
                      english_name
                      gallery_image1 {
                        source_url
                      }
                      gallery_image2 {
                        source_url
                      }
                      main_image_pc {
                        source_url
                      }
                      main_image_sp {
                        source_url
                      }
                      top_thumbnail {
                        source_url
                      }
                      name
                      maincopy
                    }
                    slug
                    title
                    content
                    id
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const { allWordpressWpInterview } = result.data
          const postTemplate = path.resolve('./src/templates/interview.js') // テンプレートのパス
          allWordpressWpInterview.edges.forEach(edge => {
            createPage({
              path: `/interview/${edge.node.slug}/`, // ページを紐付けるURL
              component: slash(interviewTemplate),  // もととなるページテンプレートを指定
              context: {
                edge.node, // templateにわたす変数
              },
            })
          })
        })
      })
      // ==== END INTERVIEW ====
      // ==== NEWS POSTS ====
      .then(() => {
        graphql(`
            {
             allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    title
                    content
                     wordpress_id
                  }
                }
              }
            }
          `).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          // const posts = result.data.allWordpressPost.edges
          // const newsTemplate = path.resolve('./src/templates/news.js')

          // Array.from({ length: numberOfPages }).forEach((page, index) => {
          //   createPage({
          //     component: slash(newsTemplate),
          //     path: index === 0 ? '/blog' : `/blog/${index + 1}`,
          //     context: {
          //       posts: posts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
          //       numberOfPages,
          //       currentPage: index + 1
          //     }
          //   })
          // })

          // const pageTemplate = path.resolve("./src/templates/page.js")
          // _.each(posts, (post) => {
          //   createPage({
          //     path: `/post/${post.node.slug}`,
          //     component: slash(pageTemplate),
          //     context: post.node
          //   })
          // })

          resolve()
        })
      })
  })
}