const server = require("./app");
const mongoose = require("mongoose");

const { PORT, DB_CONNECTION_STRING } = require("./config");

mongoose.connect(DB_CONNECTION_STRING, {}).then(() => {
  console.log("Database connected");

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
