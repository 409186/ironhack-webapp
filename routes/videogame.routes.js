const router = require("express").Router();

//ROUTER VIDEOGAME
router.get("/videogame", (req, res, next) => {
  res.render("media/videogame");
});

module.exports = router;