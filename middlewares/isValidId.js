const { isValidObjeckId } = require("mongoose");
const HttpError = require("../helpers/HttpError");

const isValidId = (req, res, next) => {
  const id = req.params;
  if (!isValidObjeckId(id)) {
    next(HttpError(400, `$(id) is not a valid id`));
  }
  next();
};
module.exports = isValidId;
