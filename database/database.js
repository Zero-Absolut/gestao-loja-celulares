import { Sequelize } from "sequelize";

const conn = new Sequelize("loja", "root", "nirvana22", {
  host: "localhost",
  dialect: "mysql",
});

export default conn;
