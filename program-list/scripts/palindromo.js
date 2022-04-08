function palindromo() {
  document.getElementById("palindromos").innerHTML = "";
  const entrada = document.getElementsByName("palavras");

  const valor = entrada[0].value.toString().split("").join("");
  const verificar = entrada[0].value.toString().split("").reverse().join("");

  if (valor === verificar) {
    const criarTag = document.createElement("p");
    const criarHtml = document.createTextNode(`'${valor}' é um Palíndrome.`);
    criarTag.appendChild(criarHtml);
    document.getElementById("palindromos").appendChild(criarTag);
  } else {
    const criarTag = document.createElement("p");
    const criarHtml = document.createTextNode(
      `• '${valor}' Não é um Palíndrome.`
    );
    criarTag.appendChild(criarHtml);
    document.getElementById("palindromos").appendChild(criarTag);
  }
}
