export default class AnimationList {
  constructor(hasTarget, targetDom) {
    this.hasTarget = document.getElementById(hasTarget);
    this.targetDom = document.querySelectorAll(targetDom);
    this.targetDomPositionList = [];
    this.scrollEventFlag = true;
    this.observeTime = 200;
    this.controlPosition = 100;
    this.observeResize = false;
    this.fadeInUp = 'fadeInUp';
    this.styleVisible = 'visible';
  }

  setPositionList() {
    this.targetDom.forEach((t) => {
      this.targetDomPositionList.push(t.offsetTop);
    });
    this.getScreenTop();
    this.resizeWindow();
  }

  getScreenTop() {
    this.scrollEvent();
    const scrollTopPosition = document.scrollingElement.scrollTop;
    this.checkIsAnimation(scrollTopPosition);
  }

  scrollEvent() {
    window.addEventListener('scroll', () => {
      if (this.scrollEventFlag) {
        this.scrollEventFlag = false;
        setTimeout(() => {
          const scrollTopPosition = document.scrollingElement.scrollTop;
          this.checkIsAnimation(scrollTopPosition);
          this.scrollEventFlag = true;
        }, this.observeTime);
      }
    }, false);
  }

  checkIsAnimation(scrollTopPosition) {
    const windowHeight = document.documentElement.clientHeight;
    this.targetDomPositionList.filter((t, index) => {
      if (t <= scrollTopPosition + windowHeight - this.controlPosition) {
        this.targetDom[index].style.visibility = this.styleVisible;
        this.targetDom[index].classList.add(this.fadeInUp);
      }
      return false;
    });
  }

  resizeWindow() {
    window.addEventListener('resize', () => {
      clearTimeout(this.observeResize);
      this.observeResize = setTimeout(() => {
        this.targetDomPositionList = [];
        this.setPositionList();
      }, this.observeTime);
    }, false);
  }
}
