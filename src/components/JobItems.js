import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"



const JobItems = ({ jobName }) => (

  <StaticQuery
    query={graphql`
            query {
              allWordpressPage(filter: {slug: {eq: "career"}}) {
                nodes {
                  acf {
                    job_info {
                      job
                      job_categorys {
                        job_category {
                          title
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
        `}
    render={(props) => {
      console.log(props)
      console.log(jobName)
      const jobcat = props.allWordpressPage.nodes[0].acf.job_info.find(n => {
        return n.job.includes("エンジニア職")
      })

      console.log(jobcat)

      jobcat.job_categorys.map((categorys, j) => {
        return (
          <li key={j} >
            <a href={categorys.job_category.url} target="_blank" rel="noopener">{categorys.job_category.title}</a>
          </li>
        );
      })


    }
    }
  />
)

export default JobItems