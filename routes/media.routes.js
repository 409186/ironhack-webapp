//REQUIRE VARIABLES
const router = require("express").Router();
const mongoose = require("mongoose");
const fileUploader = require('../config/cloudinary.config');

//IMPORT MODELS
const Media = require("../models/Media.model");
const Review = require("../models/Review.model");

//ROUTER MEDIA
router.get("/movies", (req, res, next) => {
  Media.find({ category: "Movie" }).then((moviesData) => {
    res.render("media/movies", moviesData);
  });
});

//ROUTER ANIME
router.get("/anime", (req, res, next) => {
  Media.find({ category: "Anime" }).then((animesData) => {
    res.render("media/anime", animesData);
  });
});

//ROUTER MUSIC
router.get("/music", (req, res, next) => {
  Media.find({ category: "Music" }).then((musicsData) => {
    res.render("media/music", musicsData);
  });
});

//ROUTER DOCUMENTARIES
router.get("/documentaries", (req, res, next) => {
  Media.find({ category: "Documentary" }).then((documentariesData) => {
    res.render("media/documentaries", documentariesData);
  });
});

//ROUTER CREATE-NEW-MEDIA
router.get("/create-new-media", (req, res, next) => {
  res.render("media/create-new-media");
});

router.post("/create-new-media", fileUploader.single('imageUrl'), (req, res, next) => {
  console.log("body =>", req);
  console.log("req.body =>", req.body);
  console.log("req.file =>", req.file)
  Media.create({...req.body, imageUrl: path })
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
  Review.create(req.body).then(res.redirect("/"));
});

//ROUTER FOR INDIVIDUAL MEDIA
router.get("/:media", (req, res, next) => {
  Media.findById("627299275b7a4d35524ab53e").then((mediaData) => {
    res.render("media/media-page", mediaData);
  });
});

//EXPORTS
module.exports = router;
