import createjs from 'createjs-libs/build/preloadjs';
import { homeManifest, homeMainImg, homeMainSpImg, subManifest, assetsManifest } from './manifest';


export default class LoadStartAnime {
  constructor(isHomeCheck) {
    this.createjs = createjs;
    this.loadManifest = [];
    this.setManifest = [];
    this.isHome = isHomeCheck;
    this.homeManifest = homeManifest;
    this.subManifest = subManifest;
    this.assetsManifest = assetsManifest;
    this.mainEl = document.querySelector('main');
    this.wrapLoader = document.querySelector('#wrap-loader');

    console.log(this.isHome);
    this.init();
  }

  init() {
    if (this.isHome) {
      this.mainTitle = document.querySelector('.main-title');
      this.mainScroll = document.querySelector('.main-scroll');
      this.missionEl = document.querySelector('.mission-value');
      this.webGl = document.querySelector('#WebGL-output');
    }

    if (!this.isHome) {
      this.loadManifest = this.subManifest.concat(this.assetsManifest);
      for (let i = 0; i < this.loadManifest.length; i++) {
        this.setManifest[i] = {};
        this.setManifest[i].src = '../' + this.loadManifest[i].src;
      }
    } else {
      this.setManifest = this.homeManifest.concat(this.assetsManifest);
    }
    // LoadQueueクラス
    const loadQueue = new this.createjs.LoadQueue();
    // 並列での読み込み数を設定
    loadQueue.setMaxConnections(6);
    // 読み込みの進行状況が変化した
    loadQueue.addEventListener("progress", this.handleProgress);
    // 1つのファイルを読み込み終わったら
    loadQueue.addEventListener(
      "fileload",
      this.handleFileLoadComplete
    );
    // 全てのファイルを読み込み終わったら
    loadQueue.addEventListener("complete", function () {
      console.log("LOAD COMPLETE");

    });

    // 読み込み開始
    loadQueue.loadManifest(this.setManifest);
  }



  // handleProgress(event) {
  //   // 読み込み率を0.0~1.0で取得
  //   let progress = event.progress;
  // }

  // handleFileLoadComplete(event) {
  //   // 読み込んだファイル
  //   let result = event.result;
  // }

  // handleComplete() {
  // console.log('handleComplete isHome: ' + this.isHome);
  // document.querySelector('main').classList.add('show');

  // if (this.isHome) {
  //   document.querySelector('.main-dot-img').classList.add('hide');
  //   this.mainTitle.querySelector('h1').classList.add('show');
  //   this.mainTitle.querySelector('p').classList.add('show');
  //   this.mainScroll.classList.add('show');
  // }

  // this.wrapLoader.classList.add('hide');
  // setTimeout(() => {
  //   this.wrapLoader.classList.add('remove');
  // }, 1500);
  //   this.completeHander();
  // }

  // completeHander() {
  //   console.log('handleComplete isHome: ' + this.isHome);

  // }

}
