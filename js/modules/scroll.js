export default class AnimacaoScroll {

  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowTamanho = window.innerHeight * 0.7;

    this.animaScroll = this.animaScroll.bind(this)
  }
  
  
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowTamanho;
  
      if(sectionTop < 0){
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    })
  }

  init(){
    if(this.sections.length) {
      this.animaScroll()
      
      window.addEventListener('scroll', this.animaScroll);
    }
  }

  
}