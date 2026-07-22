# Calculator Backend - Node.js + Express

A REST API backend for the calculator application built with Node.js and Express.

## Features

- Express.js server
- RESTful API endpoints
- CORS enabled for frontend integration
- Calculation history storage
- Statistics tracking
- Error handling and validation
- **Docker ready** with health checks

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

## Docker

### Build Docker Image
```bash
docker build -f Dockerfile -t calculator-nodejs:latest .
```

### Run Docker Container
```bash
docker run -p 3000:3000 calculator-nodejs:latest
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

### 3. Clear History
**DELETE** `/api/history`

Clear all calculation history.

### 4. Get Statistics
**GET** `/api/stats`

Get calculation statistics.

## Project Structure

```
backend-nodejs/
├── server.js          # Main Express server
├── package.json       # Dependencies
├── Dockerfile         # Docker configuration
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

## Learning Outcomes

- REST API design principles
- Express.js middleware
- Request/response handling
- Data validation
- CORS configuration
- Error handling in Node.js
- Docker containerization
