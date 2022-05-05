const router = require("express").Router();
const session = require("express-session");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
  console.log(session)
});

module.exports = router;
