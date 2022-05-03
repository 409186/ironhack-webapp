const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    comment: {
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