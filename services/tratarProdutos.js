import Produtos from "../models/produtos";

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

  try {
    const produto = await Produtos.findOne({
      where: { codigo: codigo },
    });

    if (produto) {
      return { sucesso: false, msgErro: "Produto já cadastrado" };
    }
    if (precoCusto > precoVenda) {
      return {
        secesso: false,
        msgErro: "Atenção: Preço de custo maior que o preço de venda.",
      };
    }

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

    return { sucesso: true, msgSucesso: "Produto cadastrado com sucesso." };
  } catch (err) {
    console.log("Erro ao cadastrar produto" + err);
    return { sucesso: false, msgErro: "Erro tecnico ao cadastrar produto." };
  }
}
