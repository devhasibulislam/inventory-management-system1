const {
  createCategoryService,
  getCategoriesService,
  getCategoryByIdService,
  updateCategoryByIdService,
} = require("../services/category.service");

/* insert new category to db */
exports.createCategory = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New category created to DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* get all category from db */
exports.getCategories = async (req, res, next) => {
  try {
    const result = await getCategoriesService();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Fetching all categories from DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* get specific category id from db */
exports.getCategoryById = async (req, res, next) => {
  try {
    const result = await getCategoryByIdService(req.params.id);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Fetching specific id from db",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific category id from db */
exports.updateCategoryById = async (req, res, next) => {
  try {
    const result = await updateCategoryByIdService(req.params.id, req.body);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Specific category updated to DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
