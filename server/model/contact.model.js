const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need not to hash anymore bc. contact doesn't store password
// const bcrypt = require("bcryptjs");

const unique = require("mongoose-unique-validator");

const contactSchema = new Schema({
  cid: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, default: "" },
  facebook: { type: String, default: "" },
  imageUrl: {
    type: String,
    default: "https://fomantic-ui.com/images/avatar2/large/kristy.png",
  },
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

module.exports = mongoose.model("Contacts", contactSchema);
