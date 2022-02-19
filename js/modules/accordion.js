export default class Accordion {

  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.classList = 'ativo'
  }


  toglleAccordion(item) {
    item.classList.toggle(this.classList)
    item.nextElementSibling.classList.toggle(this.classList);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toglleAccordion(item))
    })
  }

  init() {
    if(this.accordionList.length) {
      this.toglleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}