var mongoose = require("mongoose");

var ToDoSchema = new mongoose.Schema(
  {
    title: String
  },
  { timestamps: true }
);

mongoose.model("ToDo", ToDoSchema);
