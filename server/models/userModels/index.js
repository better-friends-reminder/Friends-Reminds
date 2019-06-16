const db = require("../../database");

function find(id) {
  if (id) {
    return db("users")
      .where({ id })
      .first();
  }
  return db("users");
}

async function add(user) {
  const users = await db("users")
    .returning("*")
    .insert(user);
  const newUser = users[0];
  newUser.password = null;
  return newUser;
}

// const execute = async () => {
//   try {
//     const data = await add({
//       user_name: "asmolek",
//       first_name: "Ashley",
//       last_name: "Smolek",
//       email: "asmolek@gmail.com",
//       password: "testpass123"
//     });
//     const data = await find();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// execute();

module.exports = {
  find,
  add
};
