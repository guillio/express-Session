const User = require("../models/user");
const bcrypt = require("bcrypt");

const { omitSecretFields } = require("../utils");
const { SALT_ROUNDS, DB_SECRET_FIELDS } = require("../config");
const registerValidation = require("../validators/register");
const loginValidation = require("../validators/login");

exports.register = async (req, res) => {
  try {
    const validationResult = registerValidation(req.body);

    if (!validationResult) {
      return res.status(400).json({ message: validationResult });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, +SALT_ROUNDS);

    const user = await User.create({ ...req.body, password: hashedPassword });
    const cleanedUser = omitSecretFields(user, DB_SECRET_FIELDS);

    req.session.user = JSON.stringify({ ...cleanedUser, authenticated: true });

    return res.status(201).json({
      message: `You have been registered succesfully`,
      user: cleanedUser,
    });
  } catch (err) {
    return res.status(401).json({
      message: `User already exists`,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const validationResult = loginValidation(req.body);

    if (!validationResult) {
      return res.status(400).json({ message: validationResult });
    }

    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const isPasswordOkay = await bcrypt.compare(password, user.password);

    if (!isPasswordOkay) {
      throw new Error();
    }

    const cleanedUser = omitSecretFields(user, DB_SECRET_FIELDS);

    req.session.user = JSON.stringify({ ...cleanedUser, authenticated: true });

    return res.status(201).json({
      message: `You have been logged in succesfully`,
      user: cleanedUser,
    });
  } catch (err) {
    return res.status(401).json({
      message: `Wrong credentials`,
    });
  }
};

exports.logout = async (req, res) => {
  delete req.session.user;

  return res.status(201).json({
    message: `You have been logged out succesfully`,
  });
};

exports.profile = async (req, res) => {
  const user = JSON.parse(req.session.user);

  return res.status(201).json({
    message: `Here is your profile`,
    user: user,
  });
};
