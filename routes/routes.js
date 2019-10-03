var mongoose = require("mongoose");
var ToDo = mongoose.model("ToDo");

var appRouter = function(app) {
  app.get("/", function(req, res) {
    ToDo.find().then(function(todo) {
      return res.status(200).json({ todos: todo });
    });
  });
  app.post("/todo", function(req, res) {
    var todo = new ToDo(req.body);

    return todo.save().then(function() {
      return res.json({ article: todo });
    });
  });
};

module.exports = appRouter;
