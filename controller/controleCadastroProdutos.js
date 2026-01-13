import { insereProdutoSeNaoExistir } from "../services/tratarProdutos.js";

export async function cadastraProdutosController(req, res) {
  const dadosProdutoCadastro = req.body;
  console.log(dadosProdutoCadastro);
  try {
    const produtoCadastrado = await insereProdutoSeNaoExistir(req.body);

    if (produtoCadastrado.sucesso === true) {
      res.redirect("/produtos");
    } else {
      res.render("cadastro-produtos", {
        msgErro: produtoCadastrado.msgErro,
        dados: dadosProdutoCadastro,
      });
    }
  } catch (err) {
    res.render("cadastro-produtos", {
      msgErro: "Erro ao cadastrar produto",
      dadosProdutoCadastro,
    });
  }
}
