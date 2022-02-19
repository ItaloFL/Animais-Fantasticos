export default class Modal {
  constructor(botaoAbrir, botaoFechar, modal){
    this.buttonAbrir = document.querySelector(botaoAbrir);
    this.buttonFechar = document.querySelector(botaoFechar);
    this.modal = document.querySelector(modal);

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickForaModal = this.clickForaModal.bind(this)
  }
  
  toggleModal(){
    this.modal.classList.toggle('ativo');
  }

  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

  clickForaModal(event) {
    if(event.target === this.modal) {
      this.toggleModal();
    }
  }

  addModalEvents(){
    this.buttonAbrir.addEventListener('click', this.eventToggleModal);
    this.buttonFechar.addEventListener('click', this.eventToggleModal);
    this.modal.addEventListener('click', this.clickForaModal);
  }

  init(){
    if(this.buttonAbrir && this.buttonFechar && this.modal) {
      this.addModalEvents();
    }
    return this;
  }

  
}
