exports.up = async knex => {
  await knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl
      .string("user_name")
      .notNullable()
      .unique();
    tbl.string("first_name").notNullable();
    tbl.string("last_name").notNullable();
    tbl.string("email").notNullable();
    tbl.string("password").notNullable();
  });

  await knex.schema.createTable("friends", tbl => {
    tbl.increments("id");
    tbl.string("first_name").notNullable();
    tbl.string("last_name").notNullable();
    tbl.string("email").notNullable();
    tbl.string("phone_number").notNullable();
  });

  await knex.schema.createTable("events", tbl => {
    tbl.increments("id");
    tbl.string("name").notNullable();
    tbl.date("date").notNullable();
    tbl.string("message").notNullable();
    tbl.string("category").notNullable();
    tbl
      .integer("event_creator")
      .references("id")
      .inTable("users");
  });
};

exports.down = async knex => {
  await knex.schema.dropTable("events");
  await knex.schema.dropTable("friends");
  await knex.schema.dropTable("users");
};
