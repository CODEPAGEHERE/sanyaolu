const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON requests
app.use(express.json());

// In-memory storage for todos and users
let todos = [];
let users = [];

// Greet endpoint
app.get("/api/greet", (req, res) => {
  const { name = "World" } = req.query;
  res.json({ message: `Hello, '${name}'! we hope you like the endpoint samples &#10084; Happycode.` });
});

// Todo List endpoints
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Signup endpoint
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Fields are required" });

  const userExists = users.find((u) => u.username === username);
  if (userExists) return res.status(409).json({ error: "User already exists" });

  users.push({ username, password });
  res.status(201).json({ message: "Signup successful" });
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  res.status(200).json({ message: `Welcome, ${username}!` });
});

// Create text with colors endpoint
app.get("/api/text", (req, res) => {
  const { text, color = "black" } = req.query;
  if (!text) return res.status(400).json({ error: "Text is required" });

  res.json({
    html: `<p style="color: ${color};">${text}</p>`,
    preview: `Your text: "${text}" in color: "${color}"`,
  });
});

// Serve the static index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server (only for local development)
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Export the app for Vercel
module.exports = app;
