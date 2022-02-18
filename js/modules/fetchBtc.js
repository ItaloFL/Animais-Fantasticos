export default async function fetchBtc() {
  try {
    const liBtc = document.querySelector('.btc-preco')
    const valorBtc = await fetch('https://blockchain.info/ticker');
    const JsonValor = await valorBtc.json();
  
    const valor = (JsonValor.BRL.sell/10000).toFixed(2)
  
    liBtc.innerText = `R$ ${valor}`;
  } catch (error) {
    console.log(error)
  }
}

