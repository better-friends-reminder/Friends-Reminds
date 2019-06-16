const knex = require("knex");
const config = {
  client: "pg",
  connection: {
    database: "better_friends",
    user: "",
    password: ""
  }
};

const db = knex(config);

module.exports = db;
