import outsideClick from "./outsideClick.js";

export default class DropDownMenu {
  constructor(dropmenu) {
    this.dropDownMenus = document.querySelectorAll(dropmenu);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }

  addDropMenuEvent(){
    this.dropDownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init(){
    this.addDropMenuEvent()
    return this;
  }
}
