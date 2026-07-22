# Backend Calculator - Node.js + Express

A REST API backend for the calculator application built with Node.js and Express.

## Features

- Express.js server
- RESTful API endpoints
- CORS enabled for frontend integration
- Calculation history storage
- Statistics tracking
- Error handling and validation

## Installation

1. Navigate to this directory:
   ```bash
   cd backend-nodejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Start the server
```bash
npm start
```

The server will run on `http://localhost:3000`

### Development mode with auto-reload
```bash
npm run dev
```

## API Endpoints

### 1. Calculate
**POST** `/api/calculate`

Performs a calculation operation.

**Request Body:**
```json
{
  "operand1": 10,
  "operation": "+",
  "operand2": 5
}
```

**Response:**
```json
{
  "result": 15,
  "calculation": "10 + 5 = 15"
}
```

**Supported Operations:** `+`, `-`, `*`, `/`

### 2. Get History
**GET** `/api/history`

Retrieve all calculations from history.

**Response:**
```json
{
  "count": 2,
  "history": [
    {
      "operand1": 10,
      "operation": "+",
      "operand2": 5,
      "result": 15,
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "operand1": 20,
      "operation": "-",
      "operand2": 3,
      "result": 17,
      "timestamp": "2024-01-15T10:31:00Z"
    }
  ]
}
```

### 3. Clear History
**DELETE** `/api/history`

Clear all calculation history.

**Response:**
```json
{
  "message": "History cleared"
}
```

### 4. Get Statistics
**GET** `/api/stats`

Get statistics about calculations performed.

**Response:**
```json
{
  "totalCalculations": 5,
  "operationCounts": {
    "+": 2,
    "-": 1,
    "*": 1,
    "/": 1
  }
}
```

## Example Usage with cURL

```bash
# Calculate 10 + 5
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"operand1": 10, "operation": "+", "operand2": 5}'

# Get history
curl http://localhost:3000/api/history

# Get statistics
curl http://localhost:3000/api/stats

# Clear history
curl -X DELETE http://localhost:3000/api/history
```

## Project Structure

```
backend-nodejs/
├── server.js          # Main Express server
├── package.json       # Dependencies
└── README.md          # This file
```

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **body-parser**: Parse incoming request bodies
- **nodemon** (dev): Auto-restart server on file changes

## Error Handling

The API includes validation for:
- Missing required fields
- Invalid number formats
- Division by zero
- Invalid operations

All errors return appropriate HTTP status codes and error messages.

## Learning Outcomes

- REST API design principles
- Express.js middleware
- Request/response handling
- Data validation
- CORS configuration
- Error handling in Node.js
