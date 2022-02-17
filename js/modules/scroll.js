export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowTamanho = window.innerHeight * 0.7;

  if(sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowTamanho;
    
        if(sectionTop < 0){
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      })
    }
    
    animaScroll()
    
    window.addEventListener('scroll', animaScroll);
  }
}