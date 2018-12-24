export default class AnimationList {
  constructor(hasTarget, targetDom) {
    this.hasTarget = document.getElementById(hasTarget);
    this.targetDom = document.querySelectorAll(targetDom);
    this.scrollEventFlag = true;
    this.observeTime = 200;
  }

  positionDataSet() {
    this.targetDom.forEach((t) => {
      const domList = t;
      domList.dataset.position = domList.offsetTop;
    });
    this.scrollEvent();
  }

  scrollEvent() {
    window.addEventListener('scroll', () => {
      if (this.scrollEventFlag) {
        this.scrollEventFlag = false;
        setTimeout(() => {
          const scrollTop = document.scrollingElement.scrollTop;
          this.scrollEventFlag = true;
        }, this.observeTime);
      }
    }, false);
  }
}
