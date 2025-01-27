"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
var todos = [];

function handler(req, res) {
  var method = req.method;

  if (method === "GET") {
    return res.status(200).json(todos);
  } else if (method === "POST") {
    var task = req.body.task;
    if (!task) return res.status(400).json({
      error: "Task is required"
    });
    var newTodo = {
      id: todos.length + 1,
      task: task
    };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
  }

  return res.status(405).json({
    error: "Method not allowed"
  });
}