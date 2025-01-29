// Dummy user data (Replace with a database in real apps)
const users = [
    { username: "admin", password: "12345" },
    { username: "testuser", password: "password" }
];

export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            // Ensure body is parsed correctly
            const { username, password } = req.body;

            // Validate input
            if (!username || !password) {
                return res.status(400).json({ error: "Username and password are required." });
            }

            // Find user
            const user = users.find((u) => u.username === username && u.password === password);

            if (!user) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            // Successful login response
            return res.status(200).json({ message: `Welcome, ${username}!` });
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    // Method not allowed
    return res.status(405).json({ error: "Method not allowed" });
}
