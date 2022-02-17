
export default function initModal() {
  const buttonAbrir = document.querySelector('[data-modal="abrir"]');
  const buttonFechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  function toggleModal(event){
    event.preventDefault();

    modal.classList.toggle('ativo');
  }

  function clickForaModal(event) {
    if(event.target === this) {
      toggleModal(event)
    }
  }

  if(buttonAbrir && buttonFechar && modal) {
    buttonAbrir.addEventListener('click', toggleModal);
    buttonFechar.addEventListener('click', toggleModal);
    modal.addEventListener('click', clickForaModal);
  }
}
