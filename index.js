const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    dbName: "inventory-management-system",
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(
      colors.bgGreen.bold(`Database connection is successful`)
    );
  });

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(colors.bgYellow.bold(`App is running on port ${port}`));
});
