export default class PhotoGallery {

  constructor() {
    this.galleryContainer;
  }

  init(container) {
    this.galleryContainer = container;
    this.setup();
  }


  setup() {
    this.galleryMain = this.galleryContainer.querySelector('.photo-main');
    this.galleryMainImg = this.galleryMain.querySelector('img');
    this.galleryCaption = this.galleryMain.querySelector('figcaption');
    this.gallerThumbnail = Array.from(this.galleryContainer.querySelectorAll('ul li'));
    this.addEvent();
  }


  addEvent() {
    for (let i = 0; i < this.gallerThumbnail.length; i++) {
      this.gallerThumbnail[i].addEventListener('click', () => {
        //既に表示されている画像
        this.galleryMainImg = this.galleryMain.querySelector('img');
        this.galleryCaption = this.galleryMain.querySelector('figcaption');

        //ターゲット画像を取得
        const targetImg = this.gallerThumbnail[i].querySelector('img');
        const targeImgSrc = targetImg.getAttribute('src');
        const targetImgAlt = targetImg.getAttribute('alt');
        // append
        const newImgEl = document.createElement('img');
        newImgEl.setAttribute('src', targeImgSrc);
        this.galleryMain.appendChild(newImgEl);
        const newFigcapEl = document.createElement('figcaption');
        newFigcapEl.textContent = targetImgAlt;
        this.galleryMain.appendChild(newFigcapEl);


        setTimeout(() => {
          //新しい画像をフェードイン
          newImgEl.classList.add('show');
          this.galleryCaption.classList.remove('show');
          newFigcapEl.classList.add('show');
          setTimeout(() => {
            //元の画像を削除
            this.galleryMain.removeChild(this.galleryMainImg);
            this.galleryMain.removeChild(this.galleryCaption);
          }, 800);
        }, 100);

        //一旦サムネイルからcurrentを消す
        for (let j = 0; j < this.gallerThumbnail.length; j++) {
          this.gallerThumbnail[j].classList.remove('current');
        }
        // クリックした対象にcurrentを付与
        this.gallerThumbnail[i].classList.add('current');
      }, false);
    }
  }
}
