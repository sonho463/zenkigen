import React from 'react'
import { graphql, StaticQuery, Link} from 'gatsby'

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={props => props.allWordpressWpInterview.edges.map(InterviewItems => (
        <div key={InterviewItems.node.id}>
          <h2>{InterviewItems.node.title}</h2>
          <img src={InterviewItems.node.acf.gallery_image1.source_url} />
          <div dangerouslySetInnerHTML={{ __html: InterviewItems.node.content }} />
          <Link to={`/interview/${InterviewItems.node.slug}`}>
            Read more
        </Link>
        </div>
      ))}
    />
  )
}