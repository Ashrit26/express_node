# Express App with Remote Command Execution

This is a simple Express.js application that accepts POST requests containing command-line arguments and executes the specified command on a remote machine. The application uses the yargs package to parse command-line arguments and the child_process module's execSync function to execute commands synchronously.


### Installation

1. Clone the repository: https://github.com/Ashrit26/express_node.git
2. Navigate to the project directory: cd express_node
3. Install dependencies: npm install


### Usage

1. Start the server: node index.js
2. Send a POST request to the server endpoint with the command-line arguments in the request body. For example: curl -X POST -H "Content-Type: application/json" -d '{"command": "your command here"}' http://localhost:3000/launch/container


Ensure that you implement proper security measures, such as input validation and authentication, to prevent unauthorized access and mitigate potential security risks associated with executing remote commands.




