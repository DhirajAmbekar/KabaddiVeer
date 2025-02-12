const express = require("express");
const mongoose = require("mongoose");
const { log_start } = require("./utils/logger");
const app = express();
const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017/Netflix", {
    serverApi: ServerApiVersion.v1,
  })
  .then(() => console.log(chalk.bgGreen("DB Connected")))
  .catch((err) => console.log(chalk.bgRed(err)));

app.use("/api", require("./routes/user_routes"));
app.use("/api", require("./routes/admin_routes"));

app.listen(PORT, () => {
  log_start(`Server is running on http://localhost:${PORT}`);
});
