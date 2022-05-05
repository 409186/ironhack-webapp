const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    media_Id:{
      type: String,
      unique: false
    },

    user_Id:{
      type: String,
      unique: false
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
