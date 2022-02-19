export default class Tooltip {
  constructor(tolltip) {
    this.tooltips = document.querySelectorAll(tolltip);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  
  
  onMouseMove(event) {
    this.tolltip.style.top = `${event.pageY + 20}px`;
    if ( event.pageX + 240 > window.innerWidth ) {
      this.tolltip.style.left = `${event.pageX - 190}px`;
    } else {
      this.tolltip.style.left = `${event.pageX + 20}px`;
    }
  }
  
  onMouseLeave({ currentTarget }) {
    this.tolltip.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }
  
  
  criarTollTipBox(element) {
    const tolltip = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tolltip.classList.add('tooltip');
    tolltip.innerText = text;
    document.body.appendChild(tolltip);
  
    this.tolltip = tolltip;
  }
  
  onMouseOver({ currentTarget }) {
    console.log(this)
    this.criarTollTipBox(currentTarget);
    
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }


  addTolltipEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    })
  }
  
  init(){
    if(this.tooltips.length){
      this.addTolltipEvent()
    }
    return this;
  }
}

