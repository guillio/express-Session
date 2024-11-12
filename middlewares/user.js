const User = require("../models/user");

exports.loginRequired = async (req, res, next) => {
  if (req.session.user === undefined) {
    return res
      .status(403)
      .json({ message: `You should login to get access to this route` });
  }

  return next();
};

exports.visitorRequired = async (req, res, next) => {
  if (req.session.user) {
    return res.status(403).json({
      message: `You shouldn't been logged in to get access to this route`,
    });
  }

  return next();
};
