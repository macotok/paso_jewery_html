import DrawerSp from './drawerSp';
import AnimationList from './animationList';
import CalendarPc from './calendarPc';

window.onload = () => {
  // スマホドロワー
  const menuSp = new DrawerSp('.m-nav-02-icon', '.m-nav-04', '.m-cancel-01-icon', 0);
  const calendarSp = new DrawerSp('.m-nav-03-icon', '.m-calendar-02', '.m-cancel-01-icon', 2);
  if (menuSp.eventTag && calendarSp.eventTag) {
    menuSp.event();
    calendarSp.event();
  }
  // CollectionListのAnimation
  const animationList = new AnimationList('fn-animationList', '.m-list-01-list');
  if (animationList.hasTarget) {
    animationList.setPositionList();
  }
  // PCでCalendarを表示
  const calendarPc = new CalendarPc('.fn-calendarNav', '.m-calendar-01-pc', '.fn-calendarClose');
  if (calendarPc.calendarNav) {
    calendarPc.event();
  }
};
