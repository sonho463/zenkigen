// import jQuery from "jquery";
import createjs from 'createjs-libs/build/preloadjs';
import { homeManifest, subManifest, assetsManifest } from './ui/manifest';
import { isHomeCheck, hasGalleryCheck } from './helpers';
import SlideShow from './ui/slideshow';
import ScrollFade from './ui/scrollFade';
import Drawer from './ui/drawer';
import Header from './ui/header';
import SmoothScroll from './ui/smoothScroll';
import PhotoGallery from './ui/photoGallery';
import { WebGl } from './webgl.js';

export class App {

  constructor() {
    this.createjs = createjs;
    this.isHome = isHomeCheck();
    this.hasGalleryCheck = hasGalleryCheck();
    this.breakPoint = 769;
    this.windowWidth, this.windowHeight;
    this.wrapLoader;
    this.drawerEl, this.drawerTitle, this.drawerList, this.mobileNav;
    this.headerEl, this.headerNav;
    this.mainEl;
    this.isMobile;
    this.drawer = new Drawer();
    this.header = new Header();
    this.scrollFade = new ScrollFade();
    this.smoothScroll = new SmoothScroll();
  }

  init() {
    console.log('this.isHome: ' + this.isHome);
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.headerEl = document.querySelector('header');
    this.headerNav = document.querySelector('.header-nav');
    this.mainEl = document.querySelector('main');
    this.drawerEl = document.querySelector('.drawer');
    this.drawerTitle = document.querySelector('.drawer-title');
    this.drawerList = this.drawerEl.querySelectorAll('li');
    this.mobileNav = document.querySelector('.mobile-nav');
    this.wrapLoader = document.querySelector('#wrap-loader');

    if (this.isHome) {
      this.mainTitle, this.mainDot, this.mainScroll;
      this.slideShow = new SlideShow();
      this.missionEl, this.webGlEl;
      this.webGl = new WebGl();
      this.mainTitle = document.querySelector('.main-title');
      this.mainScroll = document.querySelector('.main-scroll');
      this.missionEl = document.querySelector('.mission-value');
      this.webGlEl = document.querySelector('#WebGL-output');
      this.webGl.init(this.webGlEl, this.windowWidth, this.windowHeight);
      this.slideShow.init();
    }

    if (this.hasGalleryCheck) {
      this.setPhotoGallery();
    }

    this.addEvent();
    this.header.init(this.headerEl);
    this.drawer.init(this.headerNav, this.drawerEl, this.drawerTitle, this.drawerList, this.mobileNav, this.wrapLoader);
    this.loadStartAnime();
    this.scrollFade.init(this.windowWidth, this.windowHeight, this.isHome, this.headerEl, this.mainScroll, this.webGlEl);
    this.smoothScroll.init();
  }

  loadStartAnime() {
    this.loadManifest = [];
    this.setManifest = [];
    this.homeManifest = homeManifest;
    this.subManifest = subManifest;
    this.assetsManifest = assetsManifest;
    if (!this.isHome) {
      this.loadManifest = this.subManifest.concat(this.assetsManifest);
      for (let i = 0; i < this.loadManifest.length; i++) {
        this.setManifest[i] = {};
        this.setManifest[i].src = '../' + this.loadManifest[i].src;
      }
    } else {
      this.setManifest = this.homeManifest.concat(this.assetsManifest);
    }
    // console.log('loadAnime: ' + this.setManifest);
    // LoadQueueクラス
    const loadQueue = new this.createjs.LoadQueue();
    // 並列での読み込み数を設定
    loadQueue.setMaxConnections(6);
    // 読み込み開始
    loadQueue.loadManifest(this.setManifest);
    loadQueue.addEventListener("progress", (event) => {
      // 読み込み率を0.0~1.0で取得
      let progress = event.progress;
    });
    // 全てのファイルを読み込み終わったら
    loadQueue.addEventListener("complete", () => {
      console.log("LOAD COMPLETE");
      this.mainEl.classList.add('show');

      if (this.isHome) {
        document.querySelector('.main-dot-img').classList.add('hide');
        this.mainTitle.querySelector('h1').classList.add('show');
        this.mainTitle.querySelector('p').classList.add('show');
        this.mainScroll.classList.add('show');
      }

      this.wrapLoader.classList.add('hide');
      setTimeout(() => {
        this.wrapLoader.classList.add('remove');
      }, 1500);
    });
  }

  addEvent() {
    window.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('click', this.onClick.bind(this));
  }

  onClick(_this) {
    this.smoothScroll.onClick(_this);
  }

  onResize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    if (this.windowWidth < this.breakPoint) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    if (this.isHome) {
      this.webGl._onResize(); //webGlリサイズ
    }
  }

  onScroll() {
    this.scrollFade.scrollFadeIn();
  }

  setPhotoGallery() {
    console.log('has photo gallery');
    const galleryArr = Array.from(document.querySelectorAll('.photo-gallery'));
    let photoGalleryArr = [];
    for (let i = 0; i < galleryArr.length; i++) {
      photoGalleryArr[i] = new PhotoGallery();
      photoGalleryArr[i].init(galleryArr[i]);
    }
  }

}


