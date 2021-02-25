import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const InterviewItems = ({ intervieweeName }) => (
  <StaticQuery
    query={graphql`
            query {
              allWordpressWpInterview {
                nodes {
                  slug
                  acf {
                    detail_cat
                    maincopy
                    name
                    main_image_pc {
                      source_url
                    }
                  }
                }
              }
            }
        `}
    render={(props) => {
      const person = props.allWordpressWpInterview.nodes.find(n => {
        return n.slug.includes(intervieweeName)
      })
      console.log(person)
      return (

        <div className={`bottom-interview-container ${person.slug}`} >
          <Link to={`/interview/${person.slug}`}>
            <div className="overlay"></div>
            <div className="dot-img"></div>
            <div className="bottom-interview-meta">
              <p className="interview-title" dangerouslySetInnerHTML={{ __html: person.acf.maincopy }} />
              <p className="interview-name">{person.acf.name}</p>
              <p className="interview-job">{person.acf.detail_cat}</p>
            </div>
          </Link>
        </div>
      )
    }
    }
  />
)

export default InterviewItems
