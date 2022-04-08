function inverter() {
  // zeramos os reultado toda vez que clicamos para executar
  document.getElementById("inverted").innerHTML = "";

  // digitamos qualquer coisa no input e guardamos nesta constante
  const entrada = document.getElementsByName("string");

  // uma nova constante com o valor digitado, porém, transofrmando em String para puxarmos os metodos viaveis para a inversão.
  // o split('') irá separa cada digito da entrada em um item de array
  const valor = entrada[0].value.toString().split("");

  // abaixo nós pegaremos o array separados por digito e invertermos a ordem os index, os digitos ja estaram de tras pra frente
  // o Join ira juntar os digitos separados em uma string só.
  // Dentro dos aprenteses do join colocamos o que será o separador, por exemplo, join("+") -> ficaria os itens da array separados por um "+" , exemplo -> matheus furlan -> matheus+furlan
  const inverso = valor.reverse().join("");

  // informalmente esta parte executa o seguinte algoritimo:
  // crio uma TAG <p>, depois crio um html com o resultado da palavra inversa, depois coloco esse html dentro da TAG P criada, e por fim, coloco essa TAG P com o HTML dentro da DIV com o ID "inverted"

  const criarTag = document.createElement("p");
  const criarHtml = document.createTextNode(`• ${inverso}`);
  criarTag.appendChild(criarHtml);
  document.getElementById("inverted").appendChild(criarTag);
}
