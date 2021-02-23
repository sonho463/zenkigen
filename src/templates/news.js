import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default ({ pageContext }) => (
  <Layout>
    {pageContext.posts.map(post => (
      <div key={post.node.wordpress_id}>
        <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
        <p dangerouslySetInnerHTML={{ __html: post.node.content }} />
        <div>
          <Link to={`/news/${post.node.slug}`}>
            Read more
          </Link>
        </div>
      </div>
    ))}
  </Layout>
)