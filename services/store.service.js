/* external import */
const Store = require("../models/Store");

/* create category service */
exports.createStoreService = async (data) => {
  const result = await Store.create(data);
  return result;
};

/* get all categories services */
exports.getStoresService = async () => {
  const result = await Store.find({});
  return result;
};

/* get specific category service */
exports.getStoreByIdService = async (id) => {
  const result = await Store.findById({ _id: id });
  return result;
};

/* update specific category service */
exports.updateStoreByIdService = async (id, data) => {
  const result = await Store.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
