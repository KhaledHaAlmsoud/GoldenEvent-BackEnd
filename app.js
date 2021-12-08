require('dotenv').config()
require("./DB/db");
const express = require("express");
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());




///////////////////

const ActivRoute = require("./Routers/route/RouteActive");
const signUpRoute = require("./Routers/route/RouteSignUp");
const loginRoute  = require("./Routers/route/RouteLogin")
// app.use(coursesRoute);
// app.use(signUpRoute);
app.use(ActivRoute);
app.use(signUpRoute);
app.use(loginRoute);
// updateActive





///////////////////
const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log("server is running");
});