const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need not to hash anymore bc. contact doesn't store password
// const bcrypt = require("bcrypt");

const unique = require("mongoose-unique-validator");

const contactSchema = new Schema({
  cid: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mobile: { type: String, required: true },
  email: String,
  facebook: String,
  imageUrl: String,
});

// for hashing password
/*
contactSchema.pre("save", (next) => {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hashedPassword) => {
    user.password = hashedPassword;
    next();
  });
});
*/

module.exports = mongoose.model("Contact", contactSchema);
