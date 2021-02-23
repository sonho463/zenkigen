import React from "react"
import Logo from "../img/logo.svg"

export default () => (
  <div>
    <div className="drawer">
      <div className="drawer-wrapper">
        <div className="drawer-container">
          <p className="drawer-title">ZENKIGEN RECRUIT</p>
          <ul>
            <li className="td4"><a href="<?php echo home_url() ?>">採用情報トップ</a></li>
            <li className="td5"><a href="<?php echo home_url() ?>/newgraduate">新卒採用</a></li>
            <li className="td6"><a href="<?php echo home_url() ?>/career">キャリア採用</a></li>
            <li className="sc-click td7"><a href="<?php echo home_url() ?>/#interview" className="s-scroll">インタビュー</a></li>
            <li className="sc-click td8"><a href="<?php echo home_url() ?>#message" className="s-scroll">メッセージ</a></li>
            <li className="sc-click td9"><a href="<?php echo home_url() ?>#workstyle" className="s-scroll">ワークスタイル</a></li>
          </ul>
        </div>
        <div className="drawer-container">
          <p className="drawer-title drawer-corp-title">ZENKIGEN CORPORATE</p>
          <ul className="drawer-corp-list">
            <li><a href="https://zenkigen.co.jp">企業情報トップ</a></li>
            <li><a href="https://zenkigen.co.jp/about/" target="_blank">会社概要</a></li>
            <li><a href="https://zenkigen.co.jp/executive/" target="_blank">役員紹介</a></li>
            <li><a href="https://zenkigen.co.jp/about/#access" target="_blank">アクセス</a></li>
          </ul>
        </div>
      </div>
    </div>


    <header className="show">
      <div className="header-container">
        <div className="site-id">
          <a href="index.html">
            <span className="site-id-img">
              <img src={Logo} alt="logo" />
            </span>
            <span className="site-id-title">Recruit</span>
          </a>
        </div>
        <div className="back-top"><a href="<?php echo home_url() ?>">採用情報トップ</a></div>
        <div className="wrap-nav">
          <nav className="header-nav">
            <div className="mobile-nav">
              <span>MENU</span>
            </div>
          </nav>

        </div>
      </div>


    </header>
    {/* <div id="wrap-loader">
      <div className="loader">Loading...</div>
    </div> */}
  </div>
)