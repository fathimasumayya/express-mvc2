const express = require("express");

const {
  renderHome,
  addUser,
  deleteUser,
} = require("../controller/usercontroller");
const router = express.Router();
router.get("/", renderHome);
router.post("/add", addUser);
router.post("/delete", deleteUser);

module.exports = router;
