// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import modal
const User = require("./model/user.model");
const Contact = require("./model/contact.model");

// import controller
const getOneController = require("./controller/getOne.controller");
const getAllController = require("./controller/getAll.controller");
const postController = require("./controller/post.controller");
const editController = require("./controller/edit.controller");
const deleteController = require("./controller/delete.controller");

// need not to use bcryptjs
// const bcrypt = require("bcryptjs");

const app = express();

// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

// get all contact
app.get("/contacts/", getAllController);
// get one contact
app.get("/contacts/:id", getOneController);

// add one contact
app.post("/contacts", postController);
// edit one contact
app.post("/contacts/:id", editController);

// delete one contact
app.delete("/contacts/:id", deleteController);

module.exports = app;
