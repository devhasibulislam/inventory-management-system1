/* internal import */
const {
  createStoreService,
  getStoresService,
  getStoreByIdService,
  updateStoreByIdService,
} = require("../services/store.service");

/* insert new store to db */
exports.createStore = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New store created to DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* get all store from db */
exports.getStores = async (req, res, next) => {
  try {
    const result = await getStoresService();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Fetching all stores from DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* get specific store id from db */
exports.getStoreById = async (req, res, next) => {
  try {
    const result = await getStoreByIdService(req.params.id);

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

/* update specific store id from db */
exports.updateStoreById = async (req, res, next) => {
  try {
    const result = await updateStoreByIdService(req.params.id, req.body);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Specific store updated to DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
