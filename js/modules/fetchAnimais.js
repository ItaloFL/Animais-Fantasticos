import initAnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais() {
  
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
    initAnimaNumeros();
  } catch (error) {
    console.log(error)
  }
}

function criaAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');
  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
  return div;
}

FetchAnimals('./animaisapi.json')  


