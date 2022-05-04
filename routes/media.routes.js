//REQUIRE VARIABLES
const router = require("express").Router();
const mongoose = require("mongoose");

//IMPORT MODELS
const Media = require("../models/Media.model");
const Review = require("../models/Review.model");

//ROUTER MEDIA
router.get("/movies", (req, res, next) => {
  Media.find({ category: "Movie" }).then((movieData) => {
    res.render("media/movies", movieData);
  });
});

//ROUTER ANIME
router.get("/anime", (req, res, next) => {
  Media.find({ category: "Anime" }).then((animeData) => {
    res.render("media/anime", animeData);
  });
});

//ROUTER MUSIC
router.get("/music", (req, res, next) => {
  Media.find({ category: "Music" }).then((musicData) => {
    res.render("media/music", musicData);
  });
});

//ROUTER DOCUMENTARIES
router.get("/documentaries", (req, res, next) => {
  Media.find({ category: "Documentary" }).then((documentaryData) => {
    res.render("media/documentaries", documentaryData);
  });
});

//ROUTER CREATE-NEW-MEDIA
router.get("/create-new-media", (req, res, next) => {
  res.render("media/create-new-media");
});

router.post("/create-new-media", (req, res, next) => {
  console.log("body =>", req.body);
  Media.create(req.body)
    .then((newMedia) => {
      console.log("New Media =>", newMedia);
      if (newMedia.category === "Documentary") {
        res.redirect("/media/documentaries");
      } else if (newMedia.category === "Anime") {
        res.redirect("/media/anime");
      } else if (newMedia.category === "Music") {
        res.redirect("/media/music");
      } else if (newMedia.category === "Movie") {
        res.redirect("/media/movies");
      }
    })
    .catch((error) => {
      console.log("Este es el error =>", error);
    });
});

//ROUTER CREATE-NEW-REVIEW
router.get("/create-new-review", (req, res, next) => {
  res.render("media/create-new-review");
});

router.post("/create-new-review", (req, res, next) => {
  Review.create(req.body).then(res.redirect("/")).catch(console.log);
});

//EXPORTS
module.exports = router;
