import express from "express";
import authRoutes from "./routes/routes.js";
import Produtos from "./models/produtos.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;

app.use("/", authRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
