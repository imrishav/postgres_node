const Sequlize = require("sequelize");
const sequel = require("../config/db");

const Gig = sequel.define("gig", {
  title: {
    type: Sequlize.STRING,
  },
  technologies: {
    type: Sequlize.STRING,
  },
  description: {
    type: Sequlize.STRING,
  },
  budget: {
    type: Sequlize.STRING,
  },
  contact_email: {
    type: Sequlize.STRING,
  },
});

module.exports = Gig;
