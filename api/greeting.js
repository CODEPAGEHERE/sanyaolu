export default function handler(req, res) {
    const { name = "World" } = req.query;
    const message = `Hello, '${name}'! We hope you like this endpoint 👍❤️. Happy coding!`;
    
    console.log("Generated message:", message); // Log the final message
    res.status(200).json({ message });
}
