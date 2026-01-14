import { insereProdutoSeNaoExistir } from "../services/tratarProdutos.js";

export async function cadastraProdutosController(req, res) {
  const dadosProdutoCadastro = req.body;
  console.log(dadosProdutoCadastro);
  try {
    const produtoCadastrado = await insereProdutoSeNaoExistir(req.body);

    if (produtoCadastrado.sucesso === true) {
      res.redirect("/produtos");
    } else {
      res.render("partials/cadastro-produtos", {
        msgErro: produtoCadastrado.resposta.msgErro,
        dados: dadosProdutoCadastro,
        paginaAtual: "produtos",
      });
    }
  } catch (err) {
    console.log(produtoCadastrado);

    res.render("partials/cadastro-produtos", {
      msgErro: "Erro ao cadastrar produto",
      dadosProdutoCadastro,
      paginaAtual: "produtos",
    });
  }
}
