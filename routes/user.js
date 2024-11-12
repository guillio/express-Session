const express = require("express");
const router = express.Router();

const { loginRequired, visitorRequired } = require("../middlewares/user");
const { login, logout, register, profile } = require("../controllers/user");

router.post("/register", visitorRequired, register);
router.post("/login", visitorRequired, login);
router.post("/logout", loginRequired, logout);
router.get("/profile", loginRequired, profile);

module.exports = router;
