import Nav from './nav';

window.onload = () => {
  const nav = new Nav('.m-nav-02-icon', '.m-nav-04');
  if (nav.menu) {
    nav.event();
  }
};
