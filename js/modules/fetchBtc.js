export default function fetchBtc() {
}



try {
  const liBtc = document.querySelector('.btc-preco')
  const valorBtc = await fetch('https://blockchain.info/ticker');
  const JsonValor = await valorBtc.json();

  liBtc.innerText = 'R$' + (JsonValor.BRL.sell/10000).toFixed(2);
} catch (error) {
  console.log(error)
}