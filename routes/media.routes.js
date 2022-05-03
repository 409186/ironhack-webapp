const router = require("express").Router();
const Media = require("../models/Media.model")

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

router.post("/create-new-media", (req, res, next) => {
  console.log("body =>", req.body)
  Media.create(req.body)
  .then( (newMedia) => {
    console.log("New Media =>", newMedia)
  })
  .catch( error => {
    console.log("Este es el error =>", error)
  })
});

router.get("/create-new-review", (req, res, next) => {
  res.render("media/create-new-review");
});

module.exports = router;
