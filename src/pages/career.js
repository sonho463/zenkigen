import React from 'react'
import { graphql } from 'gatsby'
import Meta from "../components/meta"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import InterviewItems from '../components/InterviewItems'

const Career = ({ data }) => {
  const post = data.wordpressPage.acf
  console.log(post)

  return (
    <div>
      <Layout>
        <Meta
          title="キャリア採用情報"
          bodyclass="career career-ch"
        />
        <main id="main" className="fade-in">
          <div className="area-img fade-in"></div>
          <div className="main-gradient-overlay"></div>
          <div className="dot-img fade-out"></div>
          <div className="main-title-wrap">
            <h1 className="fade-in">Career</h1>
            <p className="subtitle-jp fade-in">キャリア採用</p>
            <p className="copy-jp fade-in">キャリア人材の採用を随時積極的に行なっています</p>
          </div>
        </main>

        <section className="sec message">
          <div className="sec-container">
            <h2 className="sc-f">Message</h2>
            <p className="copy-jp sc-f">ZENKIGENは、harutakaやZIGANなどのサービスを通し、ユーザーが最大限の能力を発揮するための環境づくりに取り組んでいます。さまざまな場面で、ご自身のキャリアや経験が生かせるはずです。AIによるデータの可視化を通し、誰しもがいきいきと暮らせる社会を次世代に引き渡すために、一緒に働きましょう。</p>
          </div>
        </section>

        {/*  募集職種部分  */}
        <section className="sec newgraduate-type">
          <div className="section-title sc-f">
            <h3>募集職種</h3>
          </div>

          <div className="sec-carre-type-container">

            <div className="carre-business">
              <>
                {post.job_info.map((job_infos, i) => {
                  return (
                    <div className="sec-data sc-f" key={i}>
                      <h4>{job_infos.job}</h4>
                      <p className="copy-jp">{job_infos.job_discription}</p>
                      <ul className="carrer-entry-link career-business sc-f">
                        <>
                          {job_infos.job_categorys.map((categorys, j) => {
                            return (
                              <li key={j} >
                                <a href={categorys.job_category.url} target="_blank" rel="noopener">{categorys.job_category.title}</a>
                              </li>
                            );
                          })
                          }
                        </>
                      </ul>
                    </div>
                  );
                }
                )}
              </>
            </div>
          </div>
        </section>
        <InterviewItems />
      </Layout>
    </div>
  )
}

export const query = graphql`
 {
 wordpressPage(wordpress_id: {eq: 6}) {
    id
    acf {
      job_info {
        job
        job_categorys {
          job_category {
            title
            url
          }
        }
        job_discription
      }
    }
  }
}
`
export default Career