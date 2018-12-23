export default class Nav {
  constructor(menuIcon, menuDom) {
    this.menu = document.querySelector(menuIcon);
    this.menuDom =  document.querySelector(menuDom);
    this.isHide = 'is-hide';
  }

  event() {
    this.menu.addEventListener('click', () => {
      this.menuDom.classList.remove(this.isHide);
    }, false);
  }
}
