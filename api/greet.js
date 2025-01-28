export default function handler(req, res) {
  const { name = "HappyUser" } = req.query;

  return res.status(200).json({
    success: true,
    message: `Hello, ${name}!`,
    data: { greeting: `Hello, ${name}!` },
  });
}
