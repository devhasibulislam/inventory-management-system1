const Category = require("../models/Category");

/* create category service */
exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};

/* get all categories services */
exports.getCategoriesService = async () => {
  const result = await Category.find({});
  return result;
};

/* get specific category service */
exports.getCategoryByIdService = async (id) => {
  const result = await Category.findById({ _id: id });
  return result;
};

/* update specific category service */
exports.updateCategoryByIdService = async (id, data) => {
  const result = await Category.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
