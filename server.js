const app = require("./app");

const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Andrii:MongoDB-password@cluster0.wlqx8nh.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
