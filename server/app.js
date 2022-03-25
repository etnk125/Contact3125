// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import modal
const User = require("./model/user.model");
const Contact = require("./model/contact.model");

// import controller
// const getOne = require("./controller/getOne.controller");
// const getAll = require("./controller/getAll.controller");
// const post = require("./controller/post.controller");
// const edit = require("./controller/edit.controller");
// const delete = require("./controller/delete.controller");

// need not to use bcryptjs
// const bcrypt = require("bcryptjs");

const app = express();

// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

// get all contact
app.get("/contacts/", (req, res) => {});
// get one contact
app.get("/contacts/:id", (req, res) => {});

// add one contact
app.post("/contacts", (req, res) => {});
// edit one contact
app.post("/contacts/:id", (req, res) => {});

// delete one contact
app.delete("/contacts/:id", (req, res) => {});

module.exports = app;
