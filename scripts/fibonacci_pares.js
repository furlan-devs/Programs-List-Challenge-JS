function fibonacciPares() {
  document.getElementById("termosPares").innerHTML = "";

  const qtdTermos = document.getElementById("qtdTermosPares").value;
  let num1 = 0;
  let num2 = 1;
  let numAtual = 0;
  const resultados = [];

  for (let i = 0; i < qtdTermos; i++) {
    if (numAtual % 2 === 0) {
      resultados.push(numAtual);
    }
    numAtual = num1 + num2;
    num2 = num1;
    num1 = numAtual;
  }

  // Neste foreach/map eu pegarei o valor e index de cada item calculado no for.
  // crio uma TAG para cada um deles. <p> </p>
  // crio um HTML da maneira que quero demonstrar em tela, no caso "Termo x = n"
  // concateno o HTML na TAG criada <p> Termo x = n </p>
  // e depois jogo a TAG com o HTML dentro da DIV que criei para exibir os resultados em tela.
  // <div> <p>"Termo x = n" </p> <div>

  resultados.forEach((valor, index) => {
    const criarTag = document.createElement("p");
    const criarHtml = document.createTextNode(
      `• Termo ${index + 1} = ${valor}`
    );
    criarTag.appendChild(criarHtml);
    document.getElementById("termosPares").appendChild(criarTag);
  });
}
