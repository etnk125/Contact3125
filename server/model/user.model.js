const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// username unique validator
const unique = require("mongoose-unique-validator");

// create schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// apply unique validator
userSchema.plugin(unique);

/*
// for hashing password
const bcrypt = require("bcryptjs");

// hash before using user
userSchema.pre("save", (next) => {
  // store self to use in child functions
  const user = this;
  // hashing
  bcrypt.hash(user.password, 10, (err, hashedPassword) => {
    if (err) return console.log(err);
    user.password = hashedPassword;
    next();
  });
});
*/

module.exports = mongoose.model("User", userSchema);
