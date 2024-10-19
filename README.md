
# Node.js and npm Basics


## Introduction to Node.js

**Node.js** is a runtime environment that allows you to run JavaScript on the server, outside of a browser. It uses the V8 JavaScript engine (the same one used by Google Chrome) to execute code, making it lightweight, efficient, and ideal for building scalable applications.

## Installing Node.js and npm

To get started, you need to install **Node.js** and **npm** (Node Package Manager).

1. Go to the official Node.js website: [Node.js](https://nodejs.org/)
2. Download the latest version for your operating system.
3. Install Node.js (npm is included with Node.js).

To verify the installation, run the following commands in your terminal:

```bash
node -v   # Check Node.js version
npm -v    # Check npm version
```

## Node.js Basics

### Creating Your First Node.js Script

To create a simple script, follow these steps:

1. Create a new JavaScript file: `hello.js`
2. Add the following code:

```javascript
console.log("Hello, Node.js!");
```

3. Run the script using Node.js in your terminal:

```bash
node hello.js
```

### Working with Modules

Node.js comes with built-in modules like `fs`, `http`, and `path`. You can also install third-party modules using npm.

Example using the `http` module to create a basic web server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

Run this script with `node server.js`, then visit `http://localhost:3000` in your browser to see the output.

## npm Basics

npm (Node Package Manager) is a tool for managing JavaScript packages (libraries or modules).

### Installing Packages

You can install packages using the `npm install` command. For example, to install **lodash**, a utility library:

```bash
npm install lodash
```

### Using a Package

Once installed, you can use the package in your script. For example, using lodash:

```javascript
const _ = require('lodash');

const array = [1, 2, 3, 4];
console.log(_.reverse(array)); // Output: [4, 3, 2, 1]
```

### Creating a `package.json` File

The `package.json` file is used to manage your project's dependencies and scripts. You can create one by running:

```bash
npm init
```

Answer the prompts, and npm will generate a `package.json` file for you.

## Demo Script

You can find the demonstration scripts in the [`demo.js`](./demo.js) file.
