const mongoose = require("mongoose");
const app = require("./server");

mongoose
  .connect("mongodb://localhost:27017/JestDB", { useNewUrlParser: true })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
