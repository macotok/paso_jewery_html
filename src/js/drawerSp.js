export default class DrawerSp {
  constructor(eventTag, targetDom, cancelButton, targetCancelButton) {
    this.eventTag = document.querySelector(eventTag);
    this.targetDom = document.querySelector(targetDom);
    this.cancelButton = document.querySelectorAll(cancelButton);
    this.body = document.body;
    this.isHide = 'is-hide';
    this.isHidden = 'is-hidden';
    this.fadeInUp = 'fadeInUp';
    this.fadeOut = 'fadeOut';
    this.targetCancelButton = targetCancelButton;
    this.setTimer = 300;
  }

  event() {
    this.eventTag.addEventListener('click', () => {
      this.targetDom.classList.remove(this.isHide);
      this.targetDom.classList.add(this.fadeInUp);
      this.body.classList.add(this.isHidden);
    }, false);
    this.cancelButton[this.targetCancelButton].addEventListener('click', () => {
      this.targetDom.classList.add(this.fadeOut);
      this.targetDom.classList.remove(this.fadeInUp);
      this.body.classList.remove(this.isHidden);
      setTimeout(() => {
        this.targetDom.classList.remove(this.fadeOut);
        this.targetDom.classList.add(this.isHide);
      }, this.setTimer);
    }, false);
  }
}
