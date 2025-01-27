"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
var users = [];

function handler(req, res) {
  if (req.method === "POST") {
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
      error: "User exists"
    });
    users.push({
      username: username,
      password: password
    });
    return res.status(201).json({
      message: "Signup successful"
    });
  }

  res.status(405).json({
    error: "Method not allowed"
  });
}