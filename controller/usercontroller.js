const { log } = require("console");
const User = require("../model/usermodel");
const renderHome = (req, res) => {
  User.find().then((users) => {
    res.render("index", { users: users });
  });
};

const addUser = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });
  newUser
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.body.id)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

module.exports = { renderHome, addUser, deleteUser };
