export default class calendarPc {
  constructor(calendarNav, targetDom, closeTargetDom) {
    this.calendarNav = document.querySelector(calendarNav);
    this.targetDom = document.querySelector(targetDom);
    this.closeTargetDom = document.querySelector(closeTargetDom);
    this.showCalendar = 'showCalendar';
    this.hideCalendar = 'hideCalendar';
    this.body = document.body;
    this.isHidden = 'is-hidden';
  }

  event() {
    this.calendarNav.addEventListener('click', () => {
      if (this.targetDom.classList.contains(this.hideCalendar)) {
        this.targetDom.classList.remove(this.hideCalendar);
      }
      this.targetDom.classList.add(this.showCalendar);
      this.body.classList.add(this.isHidden);
    }, false);
    this.closeTargetDom.addEventListener('click', () => {
      this.targetDom.classList.remove(this.showCalendar);
      this.targetDom.classList.add(this.hideCalendar);
      this.body.classList.remove(this.isHidden);
    }, false);
  }
}
