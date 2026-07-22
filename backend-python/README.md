# Calculator Backend - Python + Flask

A REST API backend for the calculator application built with Python and Flask.

## Features

- Flask web framework
- RESTful API endpoints
- CORS enabled for frontend integration
- Calculation history storage
- Statistics tracking
- Error handling and validation
- **Docker ready** with health checks

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

## Docker

### Build Docker Image
```bash
docker build -f Dockerfile -t calculator-python:latest .
```

### Run Docker Container
```bash
docker run -p 5000:5000 calculator-python:latest
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
backend-python/
├── app.py             # Main Flask application
├── requirements.txt   # Dependencies
├── Dockerfile         # Docker configuration
└── README.md          # This file
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

## Learning Outcomes

- Flask framework basics
- RESTful API design principles
- Request/response handling in Flask
- Data validation
- CORS configuration
- Error handling in Python
- Virtual environments in Python
- Docker containerization
