import React from "react"

export default () => (
  <footer className="sc-f">
    <div id="page-top">
      <a href="index.html#top" className="s-scroll">
        <span className="txt">PAGE TOP</span>
        <span className="arw"></span>
      </a>
    </div>

    <div className="footer-container">
      <div className="logo"><a href="https://zenkigen.co.jp">ZENKIGEN</a></div>

      <div className="footer-column-top">
        <section className="footer-address">
          <h4>Tokyo Office</h4>
          <div className="address-text">
            〒100-0004<br />東京都千代田区大手町1-6-1<br />大手町ビル6階643区
          </div>
              <h4>Shonan Southern Beach Office</h4>
              <div className="address-text">
                〒253-0055<br />神奈川県茅ヶ崎市中海岸4丁目12986番地52<br />サザンビーチヒルズ4F
          </div>
        </section>
                <div className="footer-nav">
                  <div className="footer-nav-top">
                    <section className="footer-nav-service">
                      <h4><a href="https://zenkigen.co.jp/service/">Service</a></h4>
                      <ul>
                        <li><a href="https://harutaka.jp/" target="_blank">harutaka</a></li>
                      </ul>
                    </section>
                    <section className="footer-nav-company">
                      <h4><a href="https://zenkigen.co.jp/">Company</a></h4>
                      <ul>
                        <li><a href="https://zenkigen.co.jp/about/" target="_blank">会社概要</a></li>
                        <li><a href="https://zenkigen.co.jp/executive/" target="_blank">役員紹介</a></li>
                        <li><a href="https://zenkigen.co.jp/about/#access" target="_blank">アクセス</a></li>
                      </ul>
                    </section>
                    <section className="footer-nav-labo">
                      <h4>Labo</h4>
                    </section>
                    <section className="footer-nav-recruit">
                      <h4><a href="index.html">Recruit</a></h4>
                      <ul>
                        <li><a href="<?php echo home_url() ?>/newgraduate">新卒採用</a></li>
                        <li><a href="<?php echo home_url() ?>/career">キャリア採用</a></li>
                        <li><a href="<?php echo home_url() ?>/#interview">インタビュー</a></li>
                        <li><a href="<?php echo home_url() ?>#message">メッセージ</a></li>
                        <li><a href="<?php echo home_url() ?>#workstyle">ワークスタイル</a></li>
                      </ul>
                    </section>
                  </div>
                  <div className="footer-nav-bottom">
                    <section className="footer-nav-news">
                      <h4><a href="https://zenkigen.co.jp/news" target="_blank">News</a></h4>
                    </section>
                    <section className="footer-nav-blog">
                      <h4><a href="https://note.com/zenkigen" target="_blank">Blog</a></h4>
                    </section>
                    <section className="footer-nav-contact">
                      <h4><a href="https://zenkigen.co.jp/contact/" target="_blank">Contact</a></h4>
                    </section>
                    <section className="footer-nav-english">
                      <h4><a href="https://zenkigen.co.jp/en/" target="_blank">English</a></h4>
                    </section>
                  </div>
                </div>
              </div>
              <div className="footer-column-bottom">
                <ul>
                  <li><a href="https://zenkigen.co.jp/privacy/">プライバシーポリシー</a></li>
                  <li><a href="https://zenkigen.co.jp/security/">情報セキュリティ方針</a></li>
                  <li><a href="https://zenkigen.co.jp/personalinfo/">個人情報の取扱いについて</a></li>
                </ul>
                <p className="copyright"><small><span lang="en">&copy;</span> ZENKIGEN, Inc.</small></p>
              </div>
    </div>
  </footer>
)