const router = require("express").Router();

router.get("/movies", (req, res, next) => {
  res.render("media/movies");
});

router.get("/anime", (req, res, next) => {
  res.render("media/anime");
});

router.get("/music", (req, res, next) => {
  res.render("media/music");
});

router.get("/documentaries", (req, res, next) => {
  res.render("media/documentaries");
});

router.get("/create-new-media", (req, res, next) => {
  res.render("media/create-new-media");
});

router.get("/create-new-review", (req, res, next) => {
  res.render("media/create-new-review");
});

module.exports = router;
