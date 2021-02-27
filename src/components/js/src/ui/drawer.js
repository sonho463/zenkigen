
export default class Drawer {

  constructor() {
    this.breakPoint = 1024;
    this.windowWidth = window.innerWidth;
  }

  init(aHeaderNav, aDrawerEl, aDrawerTitle, aDrawerList, aMobileNav, aWrapLoader) {
    // header main
    let headerNav = aHeaderNav;
    // modal
    let drawerEl = aDrawerEl;
    let drawerTitle = aDrawerTitle;
    let drawerList = aDrawerList;
    let mobileNav = aMobileNav;
    let wrapLoader = aWrapLoader;


    headerNav.addEventListener('click', () => {
      drawerEl.classList.toggle('show');
      mobileNav.classList.toggle('active');
      drawerTitle.classList.toggle('show');
      for (var i = 0; i < drawerList.length; ++i) {
        drawerList[i].classList.toggle('show');
      }
    }, false);


    drawerEl.addEventListener('click', () => {
      if (drawerEl.classList.contains('show')) {
        drawerEl.classList.remove('show');
        mobileNav.classList.remove('active');
        drawerTitle.classList.remove('show');
        for (var i = 0; i < drawerList.length; ++i) {
          drawerList[i].classList.remove('show');
        }
      }
    }, false);

  }
}
