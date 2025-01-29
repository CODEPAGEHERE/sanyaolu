export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Endpoint Documentation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          padding: 20px;
          background-color: #f4f4f4;
        }
        h1 {
          text-align: center;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: white;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .endpoint {
          padding: 15px;
          border-bottom: 1px solid #ddd;
        }
        .method {
          font-weight: bold;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          display: inline-block;
          margin-right: 10px;
        }
        .GET { background-color: #28a745; }
        .POST { background-color: #007bff; }
        .description {
          color: #666;
          font-size: 14px;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>API Documentation</h1>
        <p>Welcome to the Demo Endpoint! Below are the available endpoints:</p>
        
        <div class="endpoint">
          <span class="method GET">GET</span> <a href="/api/greet?name=John">/api/greet</a>
          <p class="description">Greets the user by name. Self Test Example: Use=> <code>/api/greet?name=John</code></p>
        </div>

        <div class="endpoint">
          <span class="method GET">GET</span> <a href="/api/todos">/api/todos</a>
          <p class="description">Fetches the list of added tasks.</p>
        </div>

        <div class="endpoint">
          <span class="method POST">POST</span> <code>/api/todos</code>
          <p class="description">Adds a new todo. Send JSON body: <code>{ "task": "Your task here" }</code></p>
        </div>

        <div class="endpoint">
          <span class="method POST">POST</span> <code>/api/signup</code>
          <p class="description">Registers a new user. Send JSON body: <code>{ "username": "test", "password": "pass123" }</code></p>
        </div>

        <div class="endpoint">
          <span class="method POST">POST</span> <code>/api/login</code>
          <p class="description">Logs in a user. Send JSON body: <code>{ "username": "test", "password": "pass123" }</code></p>
        </div>

        
        <p style="text-align: center; margin-top: 20px; color: #777;">Developed by HappyCode 🚀</p>
      </div>
    </body>
    </html>
  `);
}
