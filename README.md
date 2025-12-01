# Node.js Product CRUD

A simple RESTful API for managing products, built with Node.js and Express.

## Features

-   **Create** new products
-   **Read** all products or a specific product by ID
-   **Update** existing products
-   **Delete** products
-   **In-Memory Storage**: Data is stored in memory (data will be reset when the server restarts).

## Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd crud
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure environment variables:
    Create a `.env` file in the root directory (optional, defaults to port 3000):
    ```env
    PORT=3000
    ```

## Running the Application

### Development Mode
Runs the server with `nodemon` for hot-reloading:
```bash
npm run dev
```

### Production Mode
Runs the server normally:
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

Base URL: `http://localhost:3000`

### Products

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| **GET** | `/products` | Get all products | N/A |
| **GET** | `/products/:id` | Get a product by ID | N/A |
| **POST** | `/products` | Create a new product | `{ "name": "Item", "price": 10.99, "description": "..." }` |
| **PUT** | `/products/:id` | Update a product | `{ "name": "New Name", "price": 12.99 }` |
| **DELETE** | `/products/:id` | Delete a product | N/A |

### Example Request (Create Product)

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Laptop", "price": 999.99, "description": "High performance laptop"}'
```

## Project Structure

```
src/
├── controllers/    # Request handlers
├── models/         # Data models (In-memory implementation)
├── routes/         # API route definitions
├── app.js          # Express app setup
└── server.js       # Server entry point
```

## License

This project is licensed under the ISC License.
