import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"



const InterviewTopItems = ({intervieweeName}) => (

  <StaticQuery
    query={graphql`
            query {
              allWordpressWpInterview (filter: {slug: {ne: ""}}){
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
      console.log(intervieweeName)
      console.log(person)
       return(

         <li className={`${person.slug} sc-f`} >
          <Link to={`/interview/${person.slug}`}>
            <div className="overlay"></div>
            <div className="dot-img"></div>
             <div className="interview-meta">
              <p className="interview-title" dangerouslySetInnerHTML={{ __html: person.acf.maincopy }} />
              <p className="interview-name">{person.acf.name}</p>
              <p className="interview-job">{person.acf.detail_cat}</p>
            </div>
          </Link>
        </li>
       )
        }
    }
  />
)

export default InterviewTopItems




