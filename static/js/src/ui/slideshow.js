
import Underscore from "underscore";
import { homeMainImg, homeMainSpImg } from './manifest';
import { isMobileCheck } from '../helpers';



export default class SlideShow {
  constructor() {
    this._ = Underscore;
    this.isMobile = isMobileCheck();
    this.currentIndex = -1;
    this.timer;
    this.slide;
    this.slideLength;
    this.shuffleHomeMainImg = [];
    this.homeMainImg = homeMainImg;
    this.homeMainSpImg = homeMainSpImg;
  }


  init() {
    this.slide = document.querySelector('.slide-show');
    this.slideLength = this.homeMainImg.length;

    if (!this.isMobile) {
      this.shuffleHomeMainImg = this._.shuffle(this.homeMainImg);
    } else {
      this.shuffleHomeMainImg = this._.shuffle(this.homeMainSpImg);
    }

    for (let index = 0; index < this.slideLength; index++) {
      // this.$(this.slideShow).append('<li><img src="' + this.shuffleHomeMainImg[index] + '" alt=""></li>');
      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', this.shuffleHomeMainImg[index]);
      const liEl = document.createElement('li');
      liEl.appendChild(imgEl);
      this.slide.appendChild(liEl);
    }

    this.changeSlide(0);
  }


  changeSlide(newIndex) {
    if (this.currentIndex === newIndex) {
      return;
    }

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (this.currentIndex >= 0) {
      // this.$(this.slideShow).find('li').eq(this.currentIndex).removeClass('show');
      this.slide.querySelectorAll('li')[this.currentIndex].classList.remove('show');
      // let currentList = this.slide.querySelectorAll('li');
      // mainDot.addClass('hide');
    }

    this.slide.querySelectorAll('li')[newIndex].classList.add('show');
    // this.$(this.slideShow).find('li').eq(newIndex).addClass('show');
    // mainDot.removeClass('hide');

    this.currentIndex = newIndex;

    this.timer = setTimeout(() => {
      this.nextIndex();
    }, 6000);

  }


  nextIndex() {
    let newIndex = this.currentIndex + 1;
    if (newIndex >= this.slideLength) {
      newIndex = 0;
    }
    this.changeSlide(newIndex);
  }


}


