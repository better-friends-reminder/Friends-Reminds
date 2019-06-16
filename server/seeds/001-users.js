exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_name: "mwindu",
          first_name: "Mace",
          last_name: "Windu",
          email: "mwindu@gmail.com",
          password: "testpass123"
        },
        {
          user_name: "lskywalker",
          first_name: "Luke",
          last_name: "Skywalker",
          email: "lyskyII@gmail.com",
          password: "testpass123"
        },
        {
          user_name: "jbinks",
          first_name: "Jaja",
          last_name: "Binks",
          email: "jbinks@gmail.com",
          password: "testpass123"
        }
      ]);
    });
};
