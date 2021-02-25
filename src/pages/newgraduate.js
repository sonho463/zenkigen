import React from 'react'
import { graphql } from 'gatsby'
import Meta from "../components/meta"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import InterviewItems from '../components/InterviewItems'


export default () => (

  <Layout>
    <Meta
      title="新卒採用情報"
      bodyclass="career newgraduate"
    />

    <main id="main">
      <div className="area-img fade-in"></div>
      <div className="main-gradient-overlay"></div>
      <div className="dot-img fade-out"></div>
      <div className="main-title-wrap">
        <h1 className="fade-in">New Graduate</h1>
        <p className="subtitle-jp fade-in">新卒採用</p>
        <p className="copy-jp fade-in">各職種で新卒採用を積極的に行っています</p>
      </div>
    </main>

    <section className="sec message">
      <div className="sec-container">
        <h2 className="sc-f">Message</h2>
        <p className="copy-jp sc-f">ZENKIGENは、テクノロジーを活用したプロダクトやサービスの開発・提供を通じて、多くの人が“全機現”する社会の実現のために日々チャレンジしています。<br />
          当社のVisionに共感し、事業も会社も成長させながら、新たな産業を切り拓いていく志と情熱を持った方が活躍しています。</p>
      </div>
    </section>

    <section className="sec newgraduate-type">
      <div className="section-title sc-f">
        <h3>募集職種</h3>
      </div>
      <div className="sec-newgraduate-type-container">
        <div className="newgraduate-business">
          <div className="newgraduate-image sc-f">
            <img src="/img/newgraduate-business.jpg" alt="" />
            <div className="dot-img"></div>
          </div>
          <div className="newgraduate-meta sc-f sc-f-on">
            <h4>Business</h4>
            <p className="subtitle-jp">ビジネス職</p>
            <p className="copy-jp">様々な領域のプロフェッショナルとの共同研究開発、データ分析、新規事業立ち上げ、クライアントの課題解決に取り組みます。<br />
                  ビジネスを通して、人とAIが調和する社会を一緒につくっていきたい方のご応募をお待ちしています。</p>
            <div className="wrap-btn">
              <a href="https://herp.careers/v1/zenkigen/oE_ZYnXypqRG" target="_blank" rel="noopener">
                <div className="btn-s">
                  <span className="btn-txt">ビジネス職の募集要項はこちら</span>
                  <span className="btn-ar"><img src="/img/ar_next_black_s.svg" alt="" /></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* /ビジネス職 */}

        <div className="newgraduate-engineer">
          <div className="newgraduate-image sc-f">
            <img src="/img/newgraduate-engineer.jpg" alt="" />
            <div className="dot-img"></div>
          </div>
          <div className="newgraduate-meta sc-f sc-f-on">
            <h4>Engineer</h4>
            <p className="subtitle-jp">エンジニア職</p>
            <p className="copy-jp">最先端のテクノロジーや研究技術を用いて、当社が提供している様々なプロダクトやサービスの開発をしています。<br />
                        まだ世の中にない新しい価値を自らの手で創り出し、社会へ貢献していきたい方のご応募をお待ちしています。</p>
            <div className="wrap-btn">
              <a href="https://herp.careers/v1/zenkigen/fce7y8a15yRG" target="_blank" rel="noopener">
                <div className="btn-s">
                  <span className="btn-txt">エンジニア職の募集要項はこちら</span>
                  <span className="btn-ar"><img src="/img/ar_next_black_s.svg" alt="" /></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*  /エンジニア職 */}
      </div>
    </section>
    {/*  /#新卒採用情報  */}
    {/*  インタビュー部分  */}
    <section className="sec message">
      <div className="sec-container">
        <h2 className="sc-f show">Interview</h2>
      </div>
    </section>
    <div className="bottom-interview-link">
      <InterviewItems intervieweeName="sakamoto" />
      <InterviewItems intervieweeName="yanagihara" />
    </div>

  </Layout>
)