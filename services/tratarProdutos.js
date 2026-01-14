import Produtos from "../models/produtos.js";

export async function insereProdutoSeNaoExistir(dProdutos) {
  const {
    nomeProduto,
    categoriaProduto,
    marcaProduto,
    modelo,
    codigo,
    fornecedor,
    quantidadeEstoque,
    estoqueMinimo,
    precoCusto,
    precoVenda,
    garantia,
    statu,
    obs,
  } = dProdutos;

  let resposta = {
    sucesso: true,
    msgErro: [],
  };

  try {
    const produto = await Produtos.findOne({
      where: { codigo: codigo },
    });

    if (produto) {
      resposta.sucesso = false;
      resposta.msgErro.push("Produto já cadastrado.");
    }
    if (Number(precoCusto) > Number(precoVenda)) {
      resposta.sucesso = false;
      resposta.msgErro.push(
        "Atenção: Preço de revenda menor que o preço de custo."
      );
    }
    if (resposta.sucesso === false) {
      return { resposta };
    } else {
      const novoProduto = await Produtos.create({
        nome: nomeProduto,
        categoria: categoriaProduto,
        marca: marcaProduto,
        modelo: modelo,
        codigo: codigo,
        fornecedor: fornecedor,
        quantidade_estoque: quantidadeEstoque,
        estoque_minimo: estoqueMinimo,
        preco_custo: precoCusto,
        preco_venda: precoVenda,
        garantia: garantia,
        status: statu,
        obs: obs,
      });

      return { resposta, produto: nomeProduto };
    }
  } catch (err) {
    console.log("Erro ao cadastrar produto" + err);

    return {
      resposta: {
        sucesso: false,
        msgErro: ["Erro técnico, entre em contato com o suporte."],
      },
    };
  }
}
