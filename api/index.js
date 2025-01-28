export default function handler(req, res) {
  return res.status(200).json({
    success: true,
    message: "Welcome to the requested DEMO API! Below are the available endpoints:",
    data: [
      {
        endpoint: "greet",
        method: "GET",
        description: "Takes User's Name and Greets the user by name. Example: To self test use ==> /api/greet?name=John. ",
      },
      {
        endpoint: "todo list",
        method: "GET",
        description: "Fetches the list of todos from an array of todolist.",
      },
      {
        endpoint: "add todos",
        method: "POST",
        description: "Adds a new todo to the array of todolist. Send a JSON body: { task: 'Your task here' }",
      },
      {
        endpoint: "/api/signup",
        method: "POST",
        description: "Registers a new user with credentials. Send a JSON body: { username, password }",
      },
      {
        endpoint: "/api/login",
        method: "POST",
        description: "Logs in the user  using the registered credentials. Send a JSON body: { username, password }",
      },
      {
        endpoint: "/api/text",
        method: "GET",
        description:
          "Generates text with a color. Example: /api/text?text=Hello&color=blue",
      },
    ],
  });
}
