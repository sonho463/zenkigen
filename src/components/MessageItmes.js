import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const MessageItems = ({messageName}) => (
  <StaticQuery
    query={graphql`
            query {
             allWordpressAcfMessage {
              edges {
                node {
                  acf {
                    english_name
                    slug
                    name
                    thumbnail_detail_cat
                    thumbnail_maincopy
                  }
                }
              }
            }
            }
        `}
    render={(props) => {
      console.log(props)
      const person = props.allWordpressAcfMessage.edges.find(n => {
        return n.node.acf.slug.includes( messageName )
      })

      console.log(person)
      let messageNameArea =null;
      if (person.node.acf.slug === 'nozawa'){
        messageNameArea = `<p class="message-name-en">Nozawa Hibiki</p><h3 class="message-name">野澤 比日樹</h3>`
      } else{
        messageNameArea = `<h3 class="message-name">水野 宇広</h3><p class="message-name-en">Mizuno Takahiro</p>`
      }
      console.log(messageNameArea)
      return (
        < div className={`area message-${person.node.acf.slug} area-message sc-f`}>
          <Link to={`/message/${person.node.acf.slug}`}>
            <div className="overlay"></div>
            <div className="area-img"></div>
            <section className="area-container">
              <span dangerouslySetInnerHTML={{ __html: messageNameArea }} />
              <p className="message-job">{person.node.acf.thumbnail_detail_cat}</p>
              <p className="message-copy-jp">{person.node.acf.thumbnail_maincopy}</p>
              <div className="wrap-btn">
                <div className="btn-s">
                  <span className="btn-txt">メッセージはこちら</span>
                  <span className="btn-ar"><img src="/img/ar_next_white_s.svg" alt="" /></span>
                </div>
              </div>
            </section>
          </Link>
        </div>

      )
    }
    }
  />
)

export default MessageItems













