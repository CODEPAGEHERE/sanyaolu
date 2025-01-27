export default function handler(req, res) {
    if (req.method === "POST") {
      const { username, password } = req.body;
      const user = users.find((u) => u.username === username && u.password === password);
      if (!user) return res.status(401).json({ error: "Invalid credentials" });
  
      return res.status(200).json({ message: `Welcome, ${username}!` });
    }
  
    res.status(405).json({ error: "Method not allowed" });
  }
  