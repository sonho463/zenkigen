import { divide } from 'lodash'
import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'

class InterviewTemplate extends Component {
  render() {
    console.log(this.props)
    const post = this.props.pageContext
    console.log(post)
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

InterviewTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default InterviewTemplate

export const pageQuery = graphql`
    query($id: String!) {
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