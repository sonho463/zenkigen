import React from "react"
import { StaticQuery, graphql } from "gatsby"
import moment from "moment"



const NewsItems = () => (

  <StaticQuery
    query={graphql`
            query {
              allWordpressPost {
                edges {
                  node {
                    title
                    date
                  }
                }
              }
            }
        `}
    render={props => (
      <>
        {props.allWordpressPost.edges.map(news => (
          <dl key={news.node.title}>
            <dt>{moment(news.node.date).format(`YYYY年MM月DD日`)}</dt>
            <dd>{news.node.title}</dd>
          </dl>
        ))}
      </>
    )} />

);


export default NewsItems