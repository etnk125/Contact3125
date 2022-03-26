const Contact = require("../model/contact.model");

// using promise when searching
module.exports = async (req, res) => {
  const contact = await Contact.findOne({ id: req.params.id }, req.body);
  res.end(contact);
};
