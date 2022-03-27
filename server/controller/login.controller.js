const User = require("../model/user.model");

// using promise when searching
module.exports = async (req, res) => {
  try {
    // destructoring
    const { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).send({ msg: "all input are require" });
    }
    // may use req.body instead
    const resp = await User.findOne({ username: username, password: password });
    res.json(!!resp);
  } catch (err) {
    console.log(`ID or password incorrect`);
    console.error(err);
  }
};
