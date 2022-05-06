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
const User = require("../models/User.model");
const { findByIdAndUpdate } = require("../models/Media.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/:user", (req, res, next) => {
  const userId = req.params.user;
  Users.find({ username: `${userId}` })
    .then((userData) => {
      console.log(userData)
      Review.find({ user_id: `${userId}` })
        .then((reviewData) => {
          console.log(userData, reviewData)
          res.render("/userpage", { userData, reviewData });
        })
        .catch(console.log);
    })
    .catch(console.log);
});

module.exports = router;
