let users = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: "Fields are required" });

    const userExists = users.find((u) => u.username === username);
    if (userExists) return res.status(409).json({ error: "User exists" });

    users.push({ username, password });
    return res.status(201).json({ message: "Signup successful" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
