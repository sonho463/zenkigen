import { divide } from 'lodash'
import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Meta from '../components/meta'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import MessageItmes from '../components/MessageItmes'

class MessageTemplate extends Component {
  render() {
    console.log(this.props)
    const post = this.props.pageContext
    console.log(post)
    const nowMessage = post.slug
    let nextMessage = 'nozawa'
    if (nowMessage === 'nozawa') {
      nextMessage = 'mizuno'
    }
    console.log(nextMessage)
    return (
      <Layout>
        <Meta
          title={`メッセージ ${post.title}`}
          bodyclass={`message ${post.slug}`}
        />
        {/*  メインイメージ部分 */}
        <main id="main">
          <div className="area-img fade-in"></div>
          <div className="main-gradient-overlay"></div>
          <div className="dot-img fade-out"></div>
          <div className="main-title-wrap">
            <h1 className="fade-in">Message</h1>
            <p className="message-main-copy fade-in" dangerouslySetInnerHTML={{ __html: post.acf.maincopy }} />
            <p className="name-en fade-in">{post.acf.english_name}</p>
            <p className="name-jp fade-in">{post.acf.name}</p>
            <p className="job-jp fade-in">{post.acf.detail_cat}</p>
          </div>
        </main>
        {/*  /#main */}

        {/*  エディタの内容表示 */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <MessageItmes messageName = {nextMessage} />



      </Layout>
    )
  }
}

MessageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default MessageTemplate

export const pageQuery = graphql`
    query{
       allWordpressWpMessage {
        nodes {
          slug
          title
          content
          id
          acf {
            maincopy
            english_name
            name
            slug
            detail_cat
          }
        }
      }
    }
`