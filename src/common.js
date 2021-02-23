'use strict';


// import { App } from './App.js';
// import { Scene } from './scene/scene.js';


//homeのフラブ
let isHome;
//レスポンシブのフラグ
let isMobile;
const breakPoint = 769;

//ブラウザ判定
const userAgent = window.navigator.userAgent.toLowerCase();

let windowWidth, windowHeight;
let mainEl, mainTitle, mainDot, mainScroll;
let missionEl, webGl;
let headerEl;
let wrapLoader;
let drawerEl, mobileNav;


//画像の最大数
// const mainImageLength = 30;

const homeManifest = [
  { src: "assets/img/main01.jpg" },
  { src: "assets/img/main02.jpg" },
  { src: "assets/img/main03.jpg" },
  { src: "assets/img/main04.jpg" },
  { src: "assets/img/main05.jpg" },
  { src: "assets/img/main01_sp.jpg" },
  { src: "assets/img/main02_sp.jpg" },
  { src: "assets/img/main03_sp.jpg" },
  { src: "assets/img/main04_sp.jpg" },
  { src: "assets/img/main05_sp.jpg" },
  { src: "assets/img/area_message_mizuno.jpg" },
  { src: "assets/img/area_message_nozawa.jpg" },
  { src: "assets/img/area_career.jpg" },
  { src: "assets/img/area_newgraduate.jpg" },
  { src: "assets/img/area_workstyle.jpg" },
];

const homeMainImg = [
  homeManifest[0].src,
  homeManifest[1].src,
  homeManifest[2].src,
  homeManifest[3].src,
  homeManifest[4].src,
];

const homeMainSpImg = [
  homeManifest[5].src,
  homeManifest[6].src,
  homeManifest[7].src,
  homeManifest[8].src,
  homeManifest[9].src,
];



const subManifest = [
  { src: "assets/img/newgraduate_main.jpg" },
  { src: "assets/img/career_main.jpg" },
  { src: "assets/img/sakamoto_main.jpg" },
  { src: "assets/img/nozawa_main.jpg" },
  { src: "assets/img/mizuno_main.jpg" },
  { src: "assets/img/konita_main.jpg" },
  { src: "assets/img/yanagihara_main.jpg" },
  { src: "assets/img/miyamura_main.jpg" },
  { src: "assets/img/togami_main.jpg" },
  { src: "assets/img/seki_main.jpg" },
  // { src: "assets/img/newgraduate_main_sp.jpg" },
  // { src: "assets/img/career_main_sp.jpg" },
  // { src: "assets/img/sakamoto_main_sp.jpg" },
  { src: "assets/img/nozawa_main_sp.jpg" },
  { src: "assets/img/mizuno_main_sp.jpg" },
  { src: "assets/img/konita_main_sp.jpg" },
  // { src: "assets/img/yanagihara_main_sp.jpg" },
  // { src: "assets/img/miyamura_main_sp.jpg" },
  // { src: "assets/img/togami_main_sp.jpg" },
  // { src: "assets/img/seki_main_sp.jpg" },

];


// Fonts  -------------------------------------------
const assetsManifest = [
  { src: "assets/font/AkkuratPro-Bold.woff" },
  { src: "assets/font/AkkuratPro-Bold.woff2" },
  { src: "assets/font/AkkuratPro-Regular.woff" },
  { src: "assets/font/AkkuratPro-Regular.woff2" },
  // { src: "assets/css/style.css" } // CSS
];




$(function () {
  isHomeCheck();
  init();
  resizeHander();
  loadAnime();
  slideShow();
  scrollFadeIn();
  drawer();
  scrollAnime();
});



const init = () => {

  // new App(new Scene());
  // Windowの幅と高さをセット
  headerEl = $('header');
  headerEl.addClass('show');
  mainEl = $('main');
  drawerEl = $('.drawer');
  mobileNav = $('.mobile-nav');
  wrapLoader = $('#wrap-loader');


  if (isHome) {
    mainTitle = $('.main-title');
    mainScroll = $('.main-scroll');
    missionEl = $('.mission-value');
    webGl = $('#WebGL-output');
  }



  //リサイズイベント
  $(window).on('resize', function () {
    resizeHander();
  });
}


const isHomeCheck = () => {
  isHome = $('body').hasClass('home');
  console.log(isHome);
}



const loadAnime = () => {

  let loadManifest = [];
  let setManifest = [];

  if (!isHome) {
    loadManifest = subManifest.concat(assetsManifest);

    for (let i = 0; i < loadManifest.length; i++) {
      setManifest[i] = {};
      setManifest[i].src = '../' + loadManifest[i].src;
    }
  } else {
    setManifest = homeManifest.concat(assetsManifest);
  }
  console.log(setManifest);

  // LoadQueueクラス
  const loadQueue = new createjs.LoadQueue();
  // 並列での読み込み数を設定
  loadQueue.setMaxConnections(6);
  // 読み込みの進行状況が変化した
  loadQueue.addEventListener("progress", handleProgress);
  // 1つのファイルを読み込み終わったら
  loadQueue.addEventListener(
    "fileload",
    handleFileLoadComplete
  );
  // 全てのファイルを読み込み終わったら
  loadQueue.addEventListener("complete", handleComplete);

  // 読み込み開始
  loadQueue.loadManifest(setManifest);

  function handleProgress(event) {
    // 読み込み率を0.0~1.0で取得
    let progress = event.progress;
  }

  function handleFileLoadComplete(event) {
    // 読み込んだファイル
    let result = event.result;
  }

  function handleComplete() {
    console.log("LOAD COMPLETE");

    mainEl.addClass('show');

    if (isHome) {
      mainEl.find('.main-dot-img').addClass('hide');
      mainTitle.find('h1').addClass('show');
      mainTitle.find('p').addClass('show');
      mainScroll.addClass('show');
    }

    wrapLoader.addClass('hide');
    setTimeout(() => {
      wrapLoader.addClass('remove');
    }, 1500);
  }
}



const scrollFadeIn = () => {

  //初期値がwindowHeight内
  $('.sc-f').each(function () {
    let targetPos = $(this).offset().top;
    if (targetPos <= windowHeight) {
      setTimeout(() => {
        $(this).addClass('show');
      }, 3000);
    }
  });

  $(window).on('scroll', () => {
    let dy = $(this).scrollTop();
    // console.log(dy);
    $('.sc-f').each(function () {
      let targetPos = $(this).offset().top;
      if (dy > targetPos - windowHeight + 50) {
        $(this).addClass('show');
      }
    });

    if (dy > 8) {
      headerEl.addClass('scroll');
    } else {
      headerEl.removeClass('scroll');
    }

    if (isHome) {
      if (dy > 8) {
        mainScroll.removeClass('show');
      } else {
        mainScroll.addClass('show');
      }
      if (dy > 60 && dy < 1260) {
        webGl.addClass('show');
      } else {
        webGl.removeClass('show');
      }
    }
  });
}



const drawer = () => {
  $('.header-nav').on('click', () => {
    drawerEl.toggleClass('show');
    mobileNav.toggleClass('active');
    $('.drawer-title').toggleClass('show');
    $(drawerEl).find('li').toggleClass('show');
  });

  drawerEl.on('click', () => {
    if ($(drawerEl).hasClass('show')) {
      // console.log('has show');
      drawerEl.removeClass('show');
      mobileNav.removeClass('active');
      $('.drawer-title').removeClass('show');
      $(drawerEl).find('li').removeClass('show');

    } else {
      // console.log('not has show');
    }
  });
}



const slideShow = () => {
  let currentIndex = -1;
  let timer;
  const slideShow = $('.slide-show');
  const slideLength = homeMainImg.length;
  let shuffleHomeMainImg = [];

  if (!isMobile) {
    shuffleHomeMainImg = _.shuffle(homeMainImg);
  } else {
    shuffleHomeMainImg = _.shuffle(homeMainSpImg);
  }
  // console.log(shuffleHomeMainImg);

  for (let index = 0; index < slideLength; index++) {
    slideShow.append('<li><img src="' + shuffleHomeMainImg[index] + '" alt=""></li>');
  }

  changeSlide(0);

  function changeSlide(newIndex) {
    if (currentIndex === newIndex) {
      return;
    }

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (currentIndex >= 0) {
      $(slideShow).find('li').eq(currentIndex).removeClass('show');
      // mainDot.addClass('hide');
    }

    $(slideShow).find('li').eq(newIndex).addClass('show');
    // mainDot.removeClass('hide');

    currentIndex = newIndex;
    timer = setTimeout(() => {
      nextIndex();
    }, 6000);
  }

  function nextIndex() {
    let newIndex = currentIndex + 1;
    if (newIndex >= slideLength) {
      newIndex = 0;
    }
    changeSlide(newIndex);
  }
}







const scrollAnime = () => {
  $('.drawer .sc-click a').on('click', function (evt) {
    evt.preventDefault();
    var targetName = $(this).attr("href");
    var targetPosY = $(targetName).offset().top;
    $('html, body').animate({ scrollTop: targetPosY - 70 }, 500);
  });

  $('#page-top a').on('click', function (evt) {
    $('html, body').animate({ scrollTop: 0 }, 1500);
  });

}



const resizeHander = () => {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  if (windowWidth < breakPoint) {
    isMobile = true;
  } else {
    isMobile = false;
  }
}
