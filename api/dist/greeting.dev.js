"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(req, res) {
  var _req$query$name = req.query.name,
      name = _req$query$name === void 0 ? "World" : _req$query$name;
  var message = "Hello, '".concat(name, "'! We hope you like this endpoint \uD83D\uDC4D\u2764\uFE0F. Happy coding!");
  console.log("Generated message:", message); // Log the final message

  res.status(200).json({
    message: message
  });
}