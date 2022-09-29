const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a category name"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    description: String,
    imageURL: {
      type: String,
      required: [true, "Please, provide an image url for your category"],
      validate: [validator.isURL, "Please provide a valid image URL"],
    },
  },
  {
    timestamps: true,
  }
);

const Category = new mongoose.model("Category", categorySchema);
module.exports = Category;
