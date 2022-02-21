import AnimaNumeros from "./anima-numeros";


export default function fetchAnimais() {
  function criaAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div;
  }
  
  async function FetchAnimals(url) {
    try {
      const ResponseAnimais = await fetch(url);
      const JsonAnimais = await ResponseAnimais.json();
      const numerosGrid = document.querySelector('.numeros-grid');
    
      JsonAnimais.forEach(animal => {
        const divAnimal = criaAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros' ,'ativo');
      animaNumeros.init()
    } catch (error) {
      console.log(error)
    }
  }
  
  
  FetchAnimals('../../animaisapi.json')  
  
}



