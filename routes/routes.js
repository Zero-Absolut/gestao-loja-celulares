import express from "express";
import { validaProdutosCadastro } from "../middlewares/validacao-produtos.js";
import { regrasCadastroProduto } from "../middlewares/validacao-produtos.js";
import { cadastraProdutosController } from "../controller/controleCadastroProdutos.js";

const route = express.Router();

route.get("/dash", (req, res) => {
  res.render("dash", { paginaAtual: "dash" });
});

route.get("/vendas", (req, res) => {
  res.render("vendas", { paginaAtual: "vendas" });
});

route.get("/produtos", (req, res) => {
  res.render("produtos", { paginaAtual: "produtos" });
});

route.get("/os", (req, res) => {
  res.render("os", { paginaAtual: "os" });
});

route.get("/clientes", (req, res) => {
  res.render("clientes", { paginaAtual: "clientes" });
});

route.get("/relatorios", (req, res) => {
  res.render("relatorios", { paginaAtual: "relatorios" });
});

route.get("/configuracao", (req, res) => {
  res.render("configuracao", { paginaAtual: "configuracao" });
});

route.get("/cadastro-produtos", (req, res) => {
  res.render("partials/cadastro-produtos", { paginaAtual: "produtos" });
});

route.post(
  "/cadastro-produtos",
  regrasCadastroProduto,
  validaProdutosCadastro,
  cadastraProdutosController
);

route.get("/cadastro-clientes", (req, res) => {
  res.render("partials/cadastro-clientes", { paginaAtual: "clientes" });
});

// rota post cadastro clientes
export default route;
