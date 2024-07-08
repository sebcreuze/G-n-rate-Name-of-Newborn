const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const boysRouter = require("./boys/router");

router.use("/boys", boysRouter);

const girlsRouter = require("./girls/router");

router.use("/girls", girlsRouter);

const mixtesRouter = require("./mixtes/router");

router.use("/mixtes", mixtesRouter);

/* ************************************************************************* */

module.exports = router;
