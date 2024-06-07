const express = require("express");

const userRoute = require("./router/userRoute");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRoute);

app.listen(2000, () =>
  console.log("server is running on port http://localhost:2000")
);
