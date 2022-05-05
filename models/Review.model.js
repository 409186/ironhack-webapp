const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user_Id: {
      type: Schema.Types.ObjectId,
      ref: "Media",
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
