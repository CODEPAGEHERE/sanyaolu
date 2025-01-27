export default function handler(req, res) {
    const { name = "codex" } = req.query;
    const message = `Hello, '${name}'! We hope you like this endpoint 👍❤️. Happycode!`;
    
    console.log("Generated message:", message); // Log the final message
    res.status(200).json({ message });
}
