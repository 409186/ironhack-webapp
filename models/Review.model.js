const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    username: {
      type: String,
    },

    mediaId: {
      type: String,
      required: true,
      unique: true,
    },

    review: {
      type: String,
    },

    calification: {
      type: Number,
    },

    like: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Review", reviewSchema);