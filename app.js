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
      let produtoUrl =
        dado.url ||
        "https://www.gsuplementos.com.br/?gad_source=1&gad_campaignid=17593900555&gclid=CjwKCAjwravBBhBjEiwAIr30VK4GCXAH_PqrWgvqM1LEQlEJFWwjugbZwPrhbfxG5u07FWyTXYS9wBoC0HkQAvD_BwE";

      resultados += `
        <figure class="figure-resultado">
        <img class="img-produtos" src="${dado.img}" alt="${dado.produto}">
        <figcaption class="figcaption-resultado">
            ${dado.produto}
            <div class="produto-footer">
              <p class="p-precos">${dado.preco}</p>
              <a href="${produtoUrl}" target="_blank" class="btn-comprar"><i class="fas fa-shopping-cart"></i> Comprar</a>
            </div>
        </figcaption>
        </figure>
      `;
    }
  }
  section_resultado.innerHTML = resultados;
}
