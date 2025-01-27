"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(req, res) {
  var _req$query = req.query,
      text = _req$query.text,
      _req$query$color = _req$query.color,
      color = _req$query$color === void 0 ? "black" : _req$query$color; // Ensure text is provided

  if (!text) {
    return res.status(400).json({
      error: "Text is required"
    });
  } // Validate the color parameter (basic CSS color validation)


  var validColors = ["black", "red", "blue", "green", "yellow", "purple", "pink"];
  var validColor = validColors.includes(color.toLowerCase()) ? color : "black"; // Return the HTML and preview response

  res.status(200).json({
    html: "<p style=\"color: ".concat(validColor, ";\">").concat(text, "</p>"),
    preview: "Your text: \"".concat(text, "\" in color: \"").concat(validColor, "\"")
  });
}