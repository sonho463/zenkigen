import { divide } from 'lodash'
import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Meta from '../components/meta'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import JobItems from '../components/JobItems'
import InterviewItems from '../components/InterviewItems'

class InterviewTemplate extends Component {
  render() {
    console.log(this.props)
    const post = this.props.pageContext
    console.log(post)
    const nowInterview = post.slug
    var nowInterview01 = ""
    var nowInterview02 = ""

    switch (post.slug) {
      case 'konita':
        var nowInterview01 = "sakamoto";
        var nowInterview02 = "yanagihara";
        break;
      case 'sakamoto':
        var nowInterview01 = "konita";
        var nowInterview02 = "seki";
        break;
      case 'yanagihara':
        var nowInterview01 = "seki";
        var nowInterview02 = "togami";
        break;
      case 'seki':
        var nowInterview01 = "sakamoto";
        var nowInterview02 = "miyamura";
        break;
      case 'miyamura':
        var nowInterview01 = "seki";
        var nowInterview02 = "yanagihara";
        break;
      case 'togami':
        var nowInterview01 = "yanagihara";
        var nowInterview02 = "konita";
        break;
    }

    return (
      <Layout>
        <Meta
          title={`インタビュー ${post.title}`}
          bodyclass={`interview ${post.slug}`}
        />
        {/*  メインイメージ部分 */}
        <main id="main">
          <div className="area-img fade-in"></div>
          <div className="main-gradient-overlay"></div>
          <div className="dot-img fade-out"></div>
          <div className="main-title-wrap">
            <h1 className="fade-in">Interview</h1>
            <p className="interview-main-copy fade-in" dangerouslySetInnerHTML={{ __html: post.acf.maincopy }} />
            <p className="name-en fade-in">{post.acf.english_name}</p>
            <p className="name-jp fade-in">{post.acf.name}</p>
            <p className="job-jp fade-in">{post.acf.detail_cat}</p>
          </div>
        </main>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        {/*  職種リンク */}
        <section className="sec interview-sec sc-f">
          <div className="sec-interview-container">
            <h4>{post.acf.job_cat}の募集職種</h4>

            <JobItems jobName={post.acf.job_cat} />

          </div>
        </section>

        {/*  記事前後へのリンク  */}
        <div className="bottom-interview-link">
          <InterviewItems intervieweeName={nowInterview01} />
          <InterviewItems intervieweeName={nowInterview02} />
        </div>
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
    query{
        allWordpressWpInterview {
          edges {
            node {
              acf {
                detail_cat
                job_cat
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