import AnimaNumeros from "./anima-numeros";

export default function fetchAnimais(url, target) {

  const numerosGrid = document.querySelector(target);

  function criaAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div;
  }

  function preencherAnimal(animal){
    const divAnimal = criaAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimalNumero(){
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros' ,'ativo');
    animaNumeros.init()
  }
  
  async function criarAnimais() {
    try {
      const ResponseAnimais = await fetch(url);
      const JsonAnimais = await ResponseAnimais.json();
    
      JsonAnimais.forEach(animal => preencherAnimal(animal));
      animaAnimalNumero();
    } catch (error) {
      console.log(error)
    }
  }
  
  return criarAnimais();
}



