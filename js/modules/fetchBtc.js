export default async function fetchBtc(url, target) {
  try {
    const liBtc = document.querySelector(target)
    const valorBtc = await fetch(url);
    const JsonValor = await valorBtc.json();
  
    const valor = (JsonValor.BRL.sell/10000).toFixed(2)
  
    liBtc.innerText = `R$ ${valor}`;
  } catch (error) {
    console.log(error)
  }
}

