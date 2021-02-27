export default class ScrollFade {

  constructor() {
    this.windowWidth, this.windowHeight;
    this.remainder;
    this.isHome;
    this.scrollY;
    this.remainder = 80;
    this.fadeContentsRect = [];
    this.fadeContentsTop = [];
    this.fadeContents = null;
    this.headerEl;
    this.mainScroll;
    this.webGl;

  }

  init(width, height, isHome, headerEl, mainScroll, webGl) {
    this.windowWidth = width;
    this.windowHeight = height;
    this.isHome = isHome;
    // スクロール位置を取得
    this.scrollY = window.pageYOffset || document.documentElement.scrollTop;
    this.headerEl = headerEl;
    this.mainScroll = mainScroll;
    this.webGl = webGl;

    this.setFadeContents();
    if (this.scrollY < this.windowHeight) {
      this.stateFadeIn();
      // console.log('<');
      this.startScFag = false;
    } else {
      this.allFadeIn();
      // console.log('>');
    }
  }


  setFadeContents() {
    // console.log('setFadeContents');
    // console.log('scrollY' + this.scrollY);
    this.startScFag = false;
    // console.log('this.startScFag: ' + this.startScFag);
    const scFade = document.querySelectorAll('.sc-f');
    const scFadeArr = [].slice.call(scFade);
    this.fadeContents = scFadeArr;
    // console.log(this.fadeContents);

    // 要素の位置を取得
    for (let i = 0; i < this.fadeContents.length; i++) {
      this.fadeContentsRect.push(this.fadeContents[i].getBoundingClientRect());
    }
    for (let i = 0; i < this.fadeContentsRect.length; i++) {
      this.fadeContentsTop.push(this.fadeContentsRect[i].top + this.scrollY);
    }

    // this.stageEl = document.getElementById('stage');
    // this.messageEl = document.getElementById('message');
  }


  scrollFadeIn() {
    // スクロール位置を取得
    this.scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let viewHeightTop = this.scrollY;
    let viewHeightBottom = this.scrollY + this.windowHeight - this.remainder;



    for (let i = 0; i < this.fadeContents.length; i++) {
      if (this.fadeContentsTop[i] >= viewHeightTop && this.fadeContentsTop[i] < viewHeightBottom) {
        this.fadeContents[i].classList.add('show');
      }
    }

    if (viewHeightTop > 8) {
      this.headerEl.classList.add('scroll');
    } else {
      this.headerEl.classList.remove('scroll');
    }

    if (this.isHome) {
      if (viewHeightTop > 8) {
        this.mainScroll.classList.remove('show');
      } else {
        this.mainScroll.classList.add('show');
      }
      if (viewHeightTop > 60 && viewHeightTop < 1260) {
        this.webGl.classList.add('show');
      } else {
        this.webGl.classList.remove('show');
      }
    }
    // console.log('scrollY' + this.scrollY);
  }

  stateFadeIn() {
    console.log('stateFadeIn');
    this.scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let viewHeightTop = this.scrollY;
    let viewHeightBottom = this.scrollY + this.windowHeight;

    for (var i = 0; i < this.fadeContents.length; i++) {
      if (this.fadeContentsTop[i] >= viewHeightTop && this.fadeContentsTop[i] < viewHeightBottom) {
        this.fadeContents[i].classList.add('show');
      }
    }
  }

  allFadeIn() {
    console.log('allFadeIn');
    for (var i = 0; i < this.fadeContents.length; i++) {
      this.fadeContents[i].classList.add('show');
    }
  }
}
