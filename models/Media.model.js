const { Schema, model } = require("mongoose");

const mediaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Anime", "Music", "Documentary", "Movie"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Media", mediaSchema);
