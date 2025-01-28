let todos = [];

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    return res.status(200).json(todos);
  } else if (method === "POST") {
    const { task } = req.body;
    if (!task) return res.status(400).json({ error: "Task is required" });
    const newTodo = { id: todos.length + 1, task };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
