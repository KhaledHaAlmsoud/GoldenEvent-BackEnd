const express = require("express");
const ActivRoute = express.Router();

const { getActive, postActive ,deleteActive,postOneActive ,getcart} = require("../controller/contolActive");
const { authentication } = require("../middelwear/authentication");


ActivRoute.get("/Activitie",getActive);
ActivRoute.post("/Activitie", authentication,postActive);
ActivRoute.delete("/Activitie/:id", authentication,deleteActive);
ActivRoute.post("/oneEvent",authentication,postOneActive)
ActivRoute.get("/oneEvent",authentication,getcart)


module.exports = ActivRoute;