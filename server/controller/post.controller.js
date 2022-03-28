const Contact = require("../model/contact.model");

//let's try to using callback function

module.exports = (req, res) => {
  Contact.create(req.body, (err, contact) => {
    if (err) {
      console.log(`Error to add contact `);
      console.error(err);
      return res.send(err);
    }
    res.json(contact);
  });
};
