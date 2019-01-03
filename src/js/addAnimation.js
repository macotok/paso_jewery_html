export default class addAnimation {
  constructor(targetDom, addClassName, targetTagName) {
    this.targetDom = document.getElementById(targetDom);
    this.targetTagName = targetTagName;
    this.addClassName = addClassName;
  }

  addTrigger() {
    const imgElement = this.targetDom.getElementsByTagName(this.targetTagName);
    Array.prototype.forEach.call(imgElement, (i) => {
      i.classList.add(this.addClassName);
    });
  }
}
