import { body, validationResult } from "express-validator";

export const regrasCadastroProduto = [
  body("nomeProduto")
    .notEmpty()
    .withMessage("O nome do produto é obrigatório")
    .trim()
    .escape()
    .isLength({ min: 3, max: 100 })
    .withMessage("O nome deve ter entre 3 e 100 caracteres"),

  body("categoriaProduto")
    .notEmpty()
    .withMessage("Você precisa selecionar uma categoria")
    .isIn(["aparelho", "peca", "acessorio"])
    .withMessage("Categoria inválida"),

  body("marcaProduto")
    .notEmpty()
    .withMessage("Você precisa selecionar uma marca")
    .isIn(["apple", "samsung", "motorola", "xiaomi", "outra"])
    .withMessage("Marca inválida"),

  body("modelo")
    .notEmpty()
    .withMessage("O modelo é obrigatório")
    .trim()
    .escape()
    .isLength({ min: 3, max: 100 })
    .withMessage("O modelo deve ter entre 3 e 100 caracteres"),

  body("codigo")
    .notEmpty()
    .withMessage("O código é obrigatório")
    .trim()
    .escape()
    .isAlphanumeric()
    .withMessage("O código deve conter letras e números")
    .isLength({ min: 1, max: 15 })
    .withMessage("O código deve ter entre 1 e 15 caracteres"),

  body("fornecedor").notEmpty().withMessage("O fornecedor é obrigatório"),

  body("quantidadeEstoque")
    .notEmpty()
    .withMessage("A quantidade em estoque é obrigatória")
    .isInt({ min: 0 })
    .withMessage("A quantidade deve ser um número inteiro")
    .toInt(),

  body("estoqueMinimo")
    .notEmpty()
    .withMessage("O estoque mínimo é obrigatório")
    .isInt({ min: 0 })
    .withMessage("O estoque mínimo deve ser um número inteiro")
    .toInt(),

  body("precoCusto")
    .notEmpty()
    .withMessage("O preço de custo é obrigatório")
    .isFloat({ min: 0 })
    .withMessage("O preço de custo deve ser um número válido")
    .toFloat(),

  body("precoVenda")
    .notEmpty()
    .withMessage("O preço de venda é obrigatório")
    .isFloat({ min: 0 })
    .withMessage("O preço de venda deve ser um número válido")
    .toFloat(),

  body("garantia")
    .notEmpty()
    .withMessage("A garantia é obrigatória")
    .isIn(["nenhuma", "30d", "90d", "6m", "12m"])
    .withMessage("Garantia inválida"),

  body("statu").optional().toBoolean(),
  body("produtoParaOs").optional().toBoolean(),

  body("obs")
    .optional()
    .trim()
    .escape()
    .isLength({ max: 2000 })
    .withMessage("Observações devem ter no máximo 2000 caracteres"),
];

export function validaProdutosCadastro(req, res, next) {
  const erros = validationResult(req);

  if (erros.isEmpty()) {
    return next();
  }
  console.log(erros);
  const errosValidados = erros.mapped();

  const dadosFormulario = req.body;

  return res.render("partials/cadastro-produtos", {
    erros: errosValidados,
    dadosProduto: dadosFormulario,
    paginaAtual: "produtos",
  });
}
