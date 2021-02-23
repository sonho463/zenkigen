import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import './style.css'


const InterviewItems = () => (
  <StaticQuery
    query={graphql`
            query {
              allWordpressWpInterview(filter: {acf: {name: {eq: "小荷田 成尭"}}}) {
                edges {
                  node {
                    slug
                    wordpress_id
                    acf {
                      detail_cat
                      maincopy
                      main_image_pc {
                        source_url
                      }
                      name
                    }
                  }
                }
              }
            }
        `}
    render={props => (


        <>
      {
          props.allWordpressWpInterview.edges.map(page => {
            console.log(page.node.acf)
            return (
            <div key={page.node.slug}>

                <div className={`bottom-interview-container ${page.node.slug}`} >
                  <Link to={`/interview/${page.node.slug}`}>
                    <div className ="overlay"></div>
                    <div className ="dot-img"></div>
                    <div className ="bottom-interview-meta">
                      <p className ="interview-title">{page.node.acf.maincopy}</p>
                      <p className ="interview-name">{page.node.acf.name}</p>
                      <p className ="interview-job">{page.node.acf.detail_cat}</p>
                    </div>
                  </Link>
                </div>

            </div>
            )
          })
      }
      </>
    )}
  />
)

export default InterviewItems




