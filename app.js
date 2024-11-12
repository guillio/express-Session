const express = require("express");
const expressSession = require("express-session");
const { SESSION_SECRET } = require("./config");
const app = express();

const userRoutes = require("./routes/user");

app.use(express.json({ limit: "1KB" }));
app.use(
  expressSession({
    name: "session-test",
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use("/api/v1/auth", userRoutes);

module.exports = app;
