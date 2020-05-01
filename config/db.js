const Sequlize = require("sequelize");

const sequl = new Sequlize("gigsproject", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequl;
