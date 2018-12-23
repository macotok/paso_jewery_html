export default class NavMenu {
  constructor(menuIcon, menuDom, cancelButton) {
    this.menu = document.querySelector(menuIcon);
    this.menuDom = document.querySelector(menuDom);
    this.cancelButton = document.querySelector(cancelButton);
    this.body = document.body;
    this.isHide = 'is-hide';
    this.isHidden = 'is-hidden';
    this.fadeInUp = 'fadeInUp';
  }

  event() {
    this.menu.addEventListener('click', () => {
      this.menuDom.classList.remove(this.isHide);
      this.menuDom.classList.add(this.fadeInUp);
      this.body.classList.add(this.isHidden);
    }, false);
    this.cancelButton.addEventListener('click', () => {
      this.menuDom.classList.add(this.isHide);
      this.menuDom.classList.remove(this.fadeInUp);
      this.body.classList.remove(this.isHidden);
    }, false);
  }
}
