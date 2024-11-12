const _ = require("lodash");

exports.omitSecretFields = (object, toHideFields) => {
  return _.omit(object.toObject(), toHideFields);
};
