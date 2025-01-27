"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var port = 3001;

var path = require("path");

app.use(bodyParser.json()); // In-memory storage for todos and users

var todos = [];
var users = []; // Greet endpoint

app.get("/api/greet", function (req, res) {
  var _req$query$name = req.query.name,
      name = _req$query$name === void 0 ? "World" : _req$query$name;
  res.json({
    message: "Hello, ".concat(name, "!")
  });
}); // Todo List endpoints

app.get("/api/todos", function (req, res) {
  res.json(todos);
});
app.post("/api/todos", function (req, res) {
  var task = req.body.task;
  if (!task) return res.status(400).json({
    error: "Task is required"
  });
  var newTodo = {
    id: todos.length + 1,
    task: task
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
}); // Signup endpoint

app.post("/api/signup", function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;
  if (!username || !password) return res.status(400).json({
    error: "Fields are required"
  });
  var userExists = users.find(function (u) {
    return u.username === username;
  });
  if (userExists) return res.status(409).json({
    error: "User already exists"
  });
  users.push({
    username: username,
    password: password
  });
  res.status(201).json({
    message: "Signup successful"
  });
}); // Login endpoint

app.post("/api/login", function (req, res) {
  var _req$body2 = req.body,
      username = _req$body2.username,
      password = _req$body2.password;
  var user = users.find(function (u) {
    return u.username === username && u.password === password;
  });
  if (!user) return res.status(401).json({
    error: "Invalid credentials"
  });
  res.status(200).json({
    message: "Welcome, ".concat(username, "!")
  });
}); // Create text with colors endpoint

app.get("/api/text", function (req, res) {
  var _req$query = req.query,
      text = _req$query.text,
      _req$query$color = _req$query.color,
      color = _req$query$color === void 0 ? "black" : _req$query$color;
  if (!text) return res.status(400).json({
    error: "Text is required"
  });
  res.json({
    html: "<p style=\"color: ".concat(color, ";\">").concat(text, "</p>"),
    preview: "Your text: \"".concat(text, "\" in color: \"").concat(color, "\"")
  });
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
}); // Start the server

app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port));
});