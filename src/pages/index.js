import React from 'react'
// import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Meta from "../components/meta"
import Arrow from "../img/ar_next_white_s.svg"
import Layout from '../components/Layout'


export default () => (

  <Layout>
    <Meta
      title=""
      bodyclass="home"
    />
    <div id="WebGL-output"></div>

    <main id="main">
      <ul className="slide-show">
      </ul>
      <div className="main-dot-img"></div>
      <div className="main-title">
        <h1>For Our Next Generations</h1>
        <p>次世代によい社会を残す</p>
      </div>
    </main>


    <div className="main-scroll">
      <div className="main-scroll-container">
        <div className="scroll-t">
          SCROLL DOWN
      </div>
        <div className="scroll-arw"></div>
      </div>
    </div>

    <section className="mission-value">
      <div className="content-container">
        <h2 className="sc-f sc-f-on">Vision</h2>
        <p className="sub-title sc-f sc-f-on">テクノロジーを通じて<br />
          人と企業が全機現できる社会の創出に貢献する</p>
          <section className="value sc-f sc-f-on">
            <h3><span className="mv-top-line sc-f sc-f-on"></span><span className="mv-title sc-f sc-f-on">人とAIが調和する社会</span><span className="mv-bottom-line sc-f sc-f-on"></span></h3>
            <p className="copy-jp sc-f sc-f-on">社会のあらゆる領域において<br className="hidden-md-down" />「人とAIが調和して新たな価値を創出していくこと」を<br className="hidden-md-down" />求められる時代が到来しています。<br />
              私たちは、高い倫理観を持ち高度なAI技術を駆使することで、<br className="hidden-md-down" />全ての人が自身の能力や才能、溢れる個性を最大限発揮し、<br className="hidden-md-down" />それが歓迎される社会の実現に貢献します。</p>
      </section>
    </div>
  </section>

              <section className="area-newgraduate area sc-f">
                <a href="newgraduate/index.html">
                  <div className="overlay"></div>
                  <div className="area-img"></div>
                  <div className="area-container">
                    <h2>New Graduate</h2>
                    <p className="subtitle-jp">新卒採用</p>
                    <p className="copy-jp">各職種で新卒採用を積極的に行っています。</p>
                    <div className="wrap-btn">
                      <div className="btn-s">
                        <span className="btn-txt">新卒採用はこちら</span>
                        <span className="btn-ar">
                           <img src={Arrow} alt="arrow" />
                          </span>
                      </div>
                      </div>
                    </div>
    </a>
  </section>

                <section className="area-carrer area sc-f">
                  <a href="career/index.html">
                    <div className="overlay"></div>
                    <div className="dot-img"></div>
                    <div className="area-container">
                      <h2>Career</h2>
                      <p className="subtitle-jp">キャリア採用</p>
                      <p className="copy-jp">キャリア採用の受け入れを積極的に行っています。</p>
                      <div className="wrap-btn">
                        <div className="btn-s">
                          <span className="btn-txt">キャリア採用はこちら</span>
              <span className="btn-ar"> <img src={Arrow} alt="arrow" /></span>
          </div>
                        </div>
                      </div>
    </a>
  </section>
  </Layout>
)