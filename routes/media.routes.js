//REQUIRE VARIABLES
const router = require("express").Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");
const session = require("express-session");

//MIDDLEWARE
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//IMPORT MODELS
const Media = require("../models/Media.model");
const Review = require("../models/Review.model");
const UserModel = require("../models/User.model");
const { findByIdAndUpdate } = require("../models/Media.model");

//ROUTER MEDIA
router.get("/movies", (req, res, next) => {
  Media.find({ category: "Movie" })
    .then((moviesData) => {
      moviesData.forEach((data) => {
        data.description = data.description.slice(0, 100) + "...";
      });
      res.render("media/movies", { moviesData });
    })
    .catch(console.log);
});

//ROUTER ANIME
router.get("/anime", (req, res, next) => {
  Media.find({ category: "Anime" })
    .then((animesData) => {
      animesData.forEach((data) => {
        data.description = data.description.slice(0, 100) + "...";
      });
      res.render("media/anime", { animesData });
    })
    .catch(console.log);
});

//ROUTER MUSIC
router.get("/music", (req, res, next) => {
  Media.find({ category: "Music" })
    .then((musicsData) => {
      musicsData.forEach((data) => {
        data.description = data.description.slice(0, 100) + "...";
        res.render("media/music", { musicsData});
      });
    })
    .catch(console.log);
});

//ROUTER DOCUMENTARIES
router.get("/documentaries", (req, res, next) => {
  Media.find({ category: "Documentary" })
    .then((documentariesData) => {
      documentariesData.forEach((data) => {
        data.description = data.description.slice(0, 100) + "...";
      });
      res.render("media/documentaries", { documentariesData });
    })
    .catch(console.log);
});

//ROUTER CREATE-NEW-MEDIA
router.get("/create-new-media", isLoggedIn, (req, res, next) => {
  res.render("media/create-new-media");
});

router.post(
  "/create-new-media",
  isLoggedIn,
  fileUploader.single("imageUrl"),
  (req, res, next) => {
    const { path } = req.file;
    Media.create({ ...req.body, imageUrl: path })
      .then((newMedia) => {
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
      .catch(console.log);
  }
);

router.post("/:media", isLoggedIn, (req, res, next) => {
  Review.create(req.body).then(res.redirect("/")).catch(console.log);
});

//ROUTER FOR INDIVIDUAL MEDIA
router.get("/:media", (req, res, next) => {
  const mediaId = req.params.media;

  Media.findById(`${mediaId}`).then((mediaData) => {
    Review.find({})
      .then((reviewData) => {
        res.render("media/media-page", { mediaData, reviewData });
      })
      .catch(console.log);
  });
});

//EXPORTS
module.exports = router;
