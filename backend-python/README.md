# Backend Calculator - Python + Flask

A REST API backend for the calculator application built with Python and Flask.

## Features

- Flask web framework
- RESTful API endpoints
- CORS enabled for frontend integration
- Calculation history storage
- Statistics tracking
- Error handling and validation

## Installation

1. Navigate to this directory:
   ```bash
   cd backend-python
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - **On Windows:**
     ```bash
     venv\Scripts\activate
     ```
   - **On macOS/Linux:**
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Start the server
```bash
python app.py
```

The server will run on `http://localhost:5000`

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
      "timestamp": "2024-01-15T10:30:00"
    },
    {
      "operand1": 20,
      "operation": "-",
      "operand2": 3,
      "result": 17,
      "timestamp": "2024-01-15T10:31:00"
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
curl -X POST http://localhost:5000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"operand1": 10, "operation": "+", "operand2": 5}'

# Get history
curl http://localhost:5000/api/history

# Get statistics
curl http://localhost:5000/api/stats

# Clear history
curl -X DELETE http://localhost:5000/api/history
```

## Project Structure

```
backend-python/
├── app.py              # Main Flask application
├── requirements.txt    # Dependencies
└── README.md           # This file
```

## Dependencies

- **Flask**: Web framework
- **Flask-CORS**: Cross-origin resource sharing
- **Werkzeug**: WSGI utility library

## Error Handling

The API includes validation for:
- Missing required fields
- Invalid number formats
- Division by zero
- Invalid operations

All errors return appropriate HTTP status codes and error messages.

## Learning Outcomes

- Flask framework basics
- RESTful API design principles
- Request/response handling in Flask
- Data validation
- CORS configuration
- Error handling in Python
- Virtual environments in Python
