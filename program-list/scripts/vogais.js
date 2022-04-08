function vogais() {
  document.getElementById("palavrasVogais").innerHTML = "";
  const entrada = document.getElementsByName("words");

  const valor = entrada[0].value.toString().split(" ");

  valor.forEach((item) => {
    if (
      item.charAt(0) === "a" ||
      item.charAt(0) === "e" ||
      item.charAt(0) === "i" ||
      item.charAt(0) === "o" ||
      item.charAt(0) === "u"
    ) {
      const criarTag = document.createElement("p");
      const criarHtml = document.createTextNode(
        `• '${item}':  Inicia com vogal.`
      );
      criarTag.appendChild(criarHtml);
      document.getElementById("palavrasVogais").appendChild(criarTag);
    } else {
      const criarTag = document.createElement("p");
      const criarHtml = document.createTextNode(
        `• '${item}':  Não inicia com vogal.`
      );
      criarTag.appendChild(criarHtml);
      document.getElementById("palavrasVogais").appendChild(criarTag);
    }
  });
}
