function consultar() {
  document.getElementById("resultCep").innerHTML = "";
  const cep = document.querySelector("#cepDeEntrada").value;
  const cepClean = cep.replace("-", "");

  if (cepClean.length === 8) {
    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };
    fetch(`https:viacep.com.br/ws/${cepClean}/json/`, options)
      .then((response) => response.json())
      .then((data) => {
        const criarTag = document.createElement("p");

        const criarHtml = document.createTextNode(
          `• ${data.logradouro},   
        Bairro: ${data.bairro},  
        CEP: ${data.cep},  
        Cidade: ${data.localidade}/${data.uf}`,
        );
        criarTag.appendChild(criarHtml);
        document.getElementById("resultCep").appendChild(criarTag);
      });
  } else {
    const criarTag = document.createElement("p");
    const criarHtml = document.createTextNode("Digite um CEP válido.");
    criarTag.appendChild(criarHtml);
    document.getElementById("resultCep").appendChild(criarTag);
  }
}
