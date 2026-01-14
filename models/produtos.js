import { DataTypes } from "sequelize";
import conn from "../database/database.js";

export const Produtos = conn.define(
  "produtos",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fornecedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantidade_estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    estoque_minimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    preco_custo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    preco_venda: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    garantia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("ativo", "inativo"),
      allowNull: false,
      defaultValue: "ativo",
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "produtos",
    timestamps: true,
  }
);

export default Produtos;
