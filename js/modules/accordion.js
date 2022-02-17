export default function initAccordion() {
  const accordionItem = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo');
  }
  
  if(accordionItem.length) {
    accordionItem[0].classList.add('ativo')
    accordionItem[0].nextElementSibling.classList.add('ativo')
    
    accordionItem.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}