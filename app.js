function pesquisar() {
  let section_resultado = document.getElementById("resultado-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == " ") {
    section_resultado.innerHTML = "";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";

  let img = "";
  let produto = "";
  let preco = "";

  for (let dado of dados) {
    img = dado.img.toLowerCase();
    produto = dado.produto.toLowerCase();
    preco = dado.preco.toLowerCase();

    if (produto.includes(campoPesquisa) || preco.includes(campoPesquisa)) {
      resultados += `
        <figure class="figure-resultado">
        <img class="img-produtos" src="${dado.img}" alt="${dado.produto}">
        <figcaption class="figcaption-resultado">
            ${dado.produto}
            <p class="p-precos">${dado.preco}</p>
        </figcaption>
        </figure>    
      `;
    }
  }
  section_resultado.innerHTML = resultados;
}
