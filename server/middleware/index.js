const bcrypt = require("bcryptjs");

function hashPass(req, res, next) {
  const user = req.body;
  if (user.password.length < 8) {
    res.status(406).json({ message: "Password must be 8 characters or more." });
  } else {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    user.user_name = user.user_name.toLowerCase();
    next();
  }
}

module.exports = {
  hashPass
};
