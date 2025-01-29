// In-memory storage for users (this should ideally be a database in production)
let users = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required." });
    }

    // Find user based on provided credentials
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.status(200).json({ message: `Welcome, ${username}!` });
  }

  // Method Not Allowed for non-POST requests
  return res.status(405).json({ error: "Method not allowed" });
}
