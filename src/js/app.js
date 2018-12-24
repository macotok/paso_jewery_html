import DrawerSp from './drawerSp';

window.onload = () => {
  const menuSp = new DrawerSp('.m-nav-02-icon', '.m-nav-04', '.m-cancel-01-icon', 0);
  const calendarSp = new DrawerSp('.m-nav-03-icon', '.m-nav-05', '.m-cancel-01-icon', 1);
  if (menuSp.eventTag && calendarSp.eventTag) {
    menuSp.event();
    calendarSp.event();
  }
};
