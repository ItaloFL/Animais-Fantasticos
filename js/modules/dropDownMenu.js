import outsideClick from "./outsideClick.js";


export default class DropDownMenu {
  constructor(dropmenu, events) {
    this.dropDownMenus = document.querySelectorAll(dropmenu);

    if(events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = 'active'
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropMenuEvent(){
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init(){
    if(this.dropDownMenus.length) {
      this.addDropMenuEvent()
    }
    return this;
  }
}
