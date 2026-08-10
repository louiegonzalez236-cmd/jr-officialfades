const bcrypt = require("bcryptjs");

const password = "password123"; // change this to your real admin password

bcrypt.hash(password, 10).then(hash => {
  console.log("Your hashed password:");
  console.log(hash);
});
