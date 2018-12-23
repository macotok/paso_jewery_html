import NavMenu from './navMenu';

window.onload = () => {
  const navMenu = new NavMenu('.m-nav-02-icon', '.m-nav-04', '.m-cancel-01-icon');
  if (navMenu.menu) {
    navMenu.event();
  }
};
