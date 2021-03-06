import outsideClick from './outsideClick.js'


export default class MenuMobile {

  constructor(menuButton, menuList, events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList); 

    if(events === undefined) this.eventos = ['click', 'touchstart'];
    else this.events = events;

    this.activeClass = 'active'

    this.openMenu = this.openMenu.bind(this);
  }


  
  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    })
  }

  addEventMenu(){
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu)
    })
  }

  init(){
    this.addEventMenu();
  }
}





