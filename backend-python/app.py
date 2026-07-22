from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
from datetime import datetime
import os

app = Flask(__name__, static_folder='../frontend', static_url_path='')
CORS(app)

# Calculation history (in-memory storage)
calculation_history = []

# Routes

@app.route('/')
def index():
    """Serve the calculator homepage"""
    return send_from_directory('../frontend', 'index.html')

@app.route('/api/calculate', methods=['POST'])
def calculate():
    """
    POST /api/calculate
    Perform a calculation
    Body: { operand1: number, operation: string, operand2: number }
    """
    try:
        data = request.get_json()
        
        # Validate input
        if not data or 'operand1' not in data or 'operand2' not in data or 'operation' not in data:
            return jsonify({'error': 'Missing required fields'}), 400
        
        try:
            operand1 = float(data['operand1'])
            operand2 = float(data['operand2'])
        except (ValueError, TypeError):
            return jsonify({'error': 'Invalid numbers'}), 400
        
        operation = data['operation']
        result = None
        
        # Perform calculation
        if operation == '+':
            result = operand1 + operand2
        elif operation == '-':
            result = operand1 - operand2
        elif operation == '*':
            result = operand1 * operand2
        elif operation == '/':
            if operand2 == 0:
                return jsonify({'error': 'Cannot divide by zero'}), 400
            result = operand1 / operand2
        else:
            return jsonify({'error': 'Invalid operation'}), 400
        
        # Add to history
        calculation = {
            'operand1': operand1,
            'operation': operation,
            'operand2': operand2,
            'result': result,
            'timestamp': datetime.now().isoformat()
        }
        calculation_history.append(calculation)
        
        return jsonify({
            'result': result,
            'calculation': f'{operand1} {operation} {operand2} = {result}'
        }), 200
    
    except Exception as error:
        return jsonify({'error': 'Server error', 'message': str(error)}), 500

@app.route('/api/history', methods=['GET'])
def get_history():
    """
    GET /api/history
    Get all calculations from history
    """
    return jsonify({
        'count': len(calculation_history),
        'history': calculation_history
    }), 200

@app.route('/api/history', methods=['DELETE'])
def clear_history():
    """
    DELETE /api/history
    Clear calculation history
    """
    global calculation_history
    calculation_history = []
    return jsonify({'message': 'History cleared'}), 200

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """
    GET /api/stats
    Get calculation statistics
    """
    if not calculation_history:
        return jsonify({
            'totalCalculations': 0,
            'stats': 'No calculations yet'
        }), 200
    
    operation_counts = {}
    for calc in calculation_history:
        op = calc['operation']
        operation_counts[op] = operation_counts.get(op, 0) + 1
    
    return jsonify({
        'totalCalculations': len(calculation_history),
        'operationCounts': operation_counts
    }), 200

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    print()
    print('🚀 Calculator server is running on http://localhost:5000')
    print('📱 Frontend: http://localhost:5000')
    print('📊 API Documentation:')
    print('   POST   /api/calculate')
    print('   GET    /api/history')
    print('   DELETE /api/history')
    print('   GET    /api/stats')
    print()
    app.run(debug=True, port=5000)