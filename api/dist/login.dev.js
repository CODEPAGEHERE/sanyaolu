"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(req, res) {
  if (req.method === "POST") {
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password;
    var user = users.find(function (u) {
      return u.username === username && u.password === password;
    });
    if (!user) return res.status(401).json({
      error: "Invalid credentials"
    });
    return res.status(200).json({
      message: "Welcome, ".concat(username, "!")
    });
  }

  res.status(405).json({
    error: "Method not allowed"
  });
}