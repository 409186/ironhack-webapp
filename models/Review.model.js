const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    User_Id: {
      type: Schema.Types.ObjectId,
      ref: "Media",
    },

    MediaId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
