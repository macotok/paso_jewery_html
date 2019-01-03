import DrawerSp from './drawerSp';
import AnimationList from './animationList';
import CalendarPc from './calendarPc';
import AddAnimation from './addAnimation';

window.onload = () => {
  // スマホドロワー
  const menuSp = new DrawerSp('.m-nav-02-icon', '.m-nav-04', '.m-cancel-01-icon', 0);
  const calendarSp = new DrawerSp('.m-nav-03-icon', '.m-calendar-02', '.m-cancel-01-icon', 2);
  if (menuSp.eventTag && calendarSp.eventTag) {
    menuSp.event();
    calendarSp.event();
  }
  // Animationトリガーを付与
  const addAnimation = new AddAnimation('fn-animationList-02', 'fn-animation', 'img');
  if (addAnimation.targetDom) {
    addAnimation.addTrigger();
  }
  // CollectionList、ExhibitionListのAnimation
  const animationList = new AnimationList('fn-animationList-01', '.fn-animation');
  if (animationList.hasTarget) {
    animationList.setPositionList();
  }
  // CollectionDetail、ExhibitionDetailのAnimation
  const animationDetail = new AnimationList('fn-animationList-02', '.fn-animation');
  if (animationDetail.hasTarget) {
    animationList.setPositionList();
  }
  // PCでCalendarを表示
  const calendarPc = new CalendarPc('.fn-calendarNav', '.m-calendar-01', '.fn-calendarClose');
  if (calendarPc.calendarNav) {
    calendarPc.event();
  }
};
