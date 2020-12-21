exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("title");
    table
      .integer("user_id")
      .references("users.id")
      .notNullable()
      .onDelete("CASCADE");
    table.timestamp(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
