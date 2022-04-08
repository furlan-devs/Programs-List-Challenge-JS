function fatorial() {
  document.getElementById("fatoriais").innerHTML = "";
  let numero = +document.getElementsByName("number")[0].value;

  let result = 0;
  let i = 0;
  const count = 2; //igual a 2 pois todo numero vezes 1 é ele mesmo.

  for (i = numero; i >= count; i--) {
    result = numero *= i - 1;
  }

  const criarTag = document.createElement("p");
  let criarHtml = document.createTextNode(`• ${result}`);

  if (numero === 0 || numero === 1) {
    criarHtml = document.createTextNode(`• ${result + 1}`);
  }

  criarTag.appendChild(criarHtml);
  document.getElementById("fatoriais").appendChild(criarTag);
}
