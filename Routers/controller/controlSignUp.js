const bcrypt = require("bcrypt");
const userModel  = require("../../DB/Models/userModel")

const addUser = async(req, res) => {
  let { name, email, password } = req.body;
  try {
      password = await bcrypt.hash(password,10);
      const newUser = new userModel({ name, email, password, cart:[] });
      const response = await newUser.save();
      res.status(201).json(response);
  } catch (error) {
      res.send(error)
  }
};

module.exports = { addUser };