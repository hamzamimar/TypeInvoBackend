const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3003;
const db = require("./db");
const Auth = require("./src/middleware/Auth");
const User = require("./src/queries");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.post("/api/adminSignup", User.createAdmin);
app.post("/api/adminLogin", User.adminLogin);
app.post("/api/addUser", User.createEmployee);
app.post("/api/deleteUsers", User.deleteEmployee);
app.get("/api/getAllUsers", User.getAllEmployees);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
// 5887d524fab64363b6184b9ac4ebfeb8